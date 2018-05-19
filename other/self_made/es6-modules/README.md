**How to use ES6 Modules!**

1. `<script type="module">` (instead of `text/javascript`) to support ES6 modules.
2. Your module will not work in your local browser! You either need to npm install [http-server](https://www.npmjs.com/package/http-server) or deploy ([GitHub Pages](https://pages.github.com), [Surge](https://surge.sh) etc.) to test it.

**How This Page Works**

* index.html loads app.js *module*
* app.js imports `myName` from name.js and `mySchool` from school.js
* app.js adds a string containing both variables to the DOM (body)

[Check it out!](https://jballin.github.io/toy_problems/es6-modules/)

---

**How to use http-server**
* `$ npm i -g http-server`
* `$ http-server PROJECT_DIRECTORY`
* http://localhost:8080/
* Chrome DevTools → Network → Disable cache (so that the page updates your changes on refresh)

!['where to disable cache in Chrome DevTools'](https://i.stack.imgur.com/Grwsc.png)
