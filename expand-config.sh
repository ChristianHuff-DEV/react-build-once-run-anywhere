# Create a copy of the config template and rename it
cp src/config.tmpl.json src/config.json
# Read all environmental variables set in the current environment
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,);
# Replace the keys in the config with the values from the environmental variables (if a match is found)
cat src/config.json | envsubst $EXISTING_VARS | tee src/config.json
# Move the populated config into the public folder
mv src/config.json public/config.json