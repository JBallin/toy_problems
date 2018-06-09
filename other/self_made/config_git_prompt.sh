# Write *concise* script that adds all possible customizations to git prompt

function config_git_prompt() {
  local g="GIT_PS1_SHOW"
  let "$g"COLORHINTS="$g"DIRTYSTATE="$g"STASHSTATE="$g"UNTRACKEDFILES='true'
}
config_git_prompt
