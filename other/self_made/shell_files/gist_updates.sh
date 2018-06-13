# write funcs/aliases to easily update commonly used gists
# brew install gist

# gist id's
gist_bp_id=ID_HERE
gist_cask_id=ID_HERE
gist_brew_id=ID_HERE
gist_apm_id=ID_HERE
update_gist() {
  gist -u $1 $2
}
gist_is_changed() {
  # takes local_file_name and gist_id
  gist -r $2 $1 > gist_raw
  local changed
  if cmp --quiet $1 gist_raw; then
    echo "$1 already up to date!"
    changed=1
  else
    echo "Updating $1..."
    changed=0
  fi
  rm gist_raw
  return $changed
}
gist_update_bp() {
  # parens make code run in separate shell so that cwd doesn't change
  (cd ~
  if gist_is_changed .bash_profile $gist_bp_id; then
    update_gist $gist_bp_id .bash_profile
  fi)
}
gist_update_brew() {
  brew list > brew_list
  if gist_is_changed brew_list $gist_brew_id; then
    update_gist $gist_brew_id brew_list
  fi
  rm brew_list
  brew leaves > brew_leaves
  if gist_is_changed brew_leaves $gist_brew_id; then
    update_gist $gist_brew_id brew_leaves
  fi
  rm brew_leaves
}
gist_update_cask() {
  brew cask list > brew_cask
  if gist_is_changed brew_cask $gist_cask_id; then
    update_gist $gist_cask_id brew_cask
  fi
  rm brew_cask
}
gist_update_apm() {
  apm list | sed -n -e '/Community Packages/,$p' > apm_list
  if gist_is_changed apm_list $gist_apm_id; then
    update_gist $gist_apm_id apm_list
  fi
  rm apm_list
}
alias gist_update_all='gist_update_bp && gist_update_brew && gist_update_cask && gist_update_apm'
