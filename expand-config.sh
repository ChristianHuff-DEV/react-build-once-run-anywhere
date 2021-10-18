# Create a copy of the config template and rename it
cp config.tmpl.json config.json
# Read all environmental variables set in the current environment
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,);
# Replace the keys in the config with the values from the environmental variables (if a match is found)
cat config.json | envsubst $EXISTING_VARS | tee config.json
# Move the populated config into the public folder
mv config.json public/config.json