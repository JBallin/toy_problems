# write function that quickly enables/disables group of atom packages

alint() {
	err_msg="Invalid! Available Commands: 'alint e' = enable, 'alint d' = disable."
	pkgs="busy-signal intentions linter linter-eslint linter-ui-default"

	if [[ $# == 0 || $1 != "e" && $1 != "d" ]]; then
		echo $err_msg
		return 1
	elif [ $1 = "e" ]; then
		action="enable"
	elif [ $1 = "d" ]; then
		action="disable"
	fi
	apm $action $pkgs
}
