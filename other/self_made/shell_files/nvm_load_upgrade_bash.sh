# write bash scripts that load nvm (incuding bash bash_completion) and upgrade_nvm
# both should be done manually so as to not mess with path, reduce shell startup_time, and allow usage of system nvm by default
# neither command should change the working directory

NVM_DIR="$HOME/.nvm"
load_nvm_bash_completion='[[ -r $NVM_DIR/bash_completion ]] && . $NVM_DIR/bash_completion'
alias nvm_load='[ -s $NVM_DIR/nvm.sh ] && . $NVM_DIR/nvm.sh && eval $load_nvm_bash_completion'
# parens in nvm_upgrade run the commands in a separate shell, to not interfere with current directory
alias nvm_upgrade='(cd $NVM_DIR && git fetch --tags origin && git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)` && . $NVM_DIR/nvm.sh)'
