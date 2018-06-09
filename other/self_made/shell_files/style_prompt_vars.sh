# Style a prompt including current git branch only using vars/funcs (readable)

parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

set_color="\e"
default_color="00m"
cyan="36m"
gitcolor=$cyan
cwd="\W"
symbol=" 🔥 "

PS1="$cwd\[$set_color[$gitcolor\]\$(parse_git_branch)$symbol\[$set_color[$default_color\]"
