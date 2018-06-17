/*
add to profile: alias a_theme='node PATH_TO_FILE'

$ a_theme - (no args) toggles dark/light theme
$ a_theme dark - changes to dark theme
$ a_theme light - changes to light theme
$ a_theme OTHER - logs invalid input error
*/

const fs = require('fs');
const CSON = require('cson-parser');

const lightTheme = ["atom-light-ui", "atom-light-syntax"];
const darkTheme = ["atom-dark-ui", "base16-tomorrow-dark-theme"];
const atomConfig = `${process.env.HOME}/.atom/config.cson`

function changeTheme(theme) {
  const csonString = fs.readFileSync(atomConfig, 'utf8');
  const csonObj = CSON.parse(csonString);
  const currentTheme = csonObj['*'].core.themes

  if (theme === undefined) {
    toggleTheme();
  } else {
    tryChangeTheme();
  }

  function setTheme(newTheme) {
    csonObj['*'].core.themes = newTheme;
    updatedCsonString = CSON.stringify(csonObj);
    fs.writeFileSync(atomConfig, updatedCsonString);
  }

  function toggleTheme() {
    if (currentTheme[0] === darkTheme[0]) {
      setTheme(lightTheme);
      console.log('changed to light theme!');
    } else {
      setTheme(darkTheme)
      console.log('changed to dark theme!');
    }
  }

  function tryChangeTheme() {
    let newTheme = determineNewTheme();
    if (newTheme === undefined) {
      console.log('INVALID: input "light" or "dark"');
    } else if (currentTheme[0] === newTheme[0]) {
      console.log(`already set to ${theme} theme...`)
    } else {
      setTheme(newTheme);
      console.log(`changed to ${theme} theme!`)
      }
    }

  function determineNewTheme() {
    if (theme === 'dark') {
      return darkTheme;
    } else if (theme == 'light') {
      return lightTheme;
    }
  }

}

changeTheme(process.argv[2]);
