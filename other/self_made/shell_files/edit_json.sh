# build bash function that takes a fileName, key, and value and updates the file's key/value pair.

edit_json() {
  jq ".$2 = $3" $1 > tmp && mv tmp $1
}
