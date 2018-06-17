### Write script that adds a new line between every command

# Constraints:
#   1) The first line should not have a new line (it should start on top)
#   2) The script should not interfere with PROMPT_COMMAND's expected behavior

add_newline_to_prompt() {
  is_new_login="true"
  local INIT_PROMPT_COMMAND="$PROMPT_COMMAND"
  local DEFAULT_PROMPT_COMMAND=update_terminal_cwd
  PROMPT_COMMAND='{
    if [ $is_new_login = "true" ]; then
      is_new_login="false"
      eval $INIT_PROMPT_COMMAND
    else
      PS1="\n$PS1"
      PROMPT_COMMAND=$DEFAULT_PROMPT_COMMAND
    fi
  }'
}

add_newline_to_prompt
