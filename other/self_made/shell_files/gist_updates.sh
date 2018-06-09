# write funcs/aliases to easily update commonly used gists

# gist id's
gist_bp_id=ID_HERE
gist_cask_id=ID_HERE
gist_brew_id=ID_HERE

update_gist() {
  gist -u $1 $2
}
alias gist_bp="update_gist $gist_bp_id ~/.bash_profile"
gist_brew() {
  brew list > brew_list
  brew leaves > brew_leaves
  update_gist $gist_brew_id 'brew_list brew_leaves'
  rm brew_list brew_leaves
}
gist_cask() {
  brew cask list > brew_cask
  update_gist $gist_cask_id brew_cask
  rm brew_cask
}
alias gist_all='gist_bp && gist_brew && gist_cask'
