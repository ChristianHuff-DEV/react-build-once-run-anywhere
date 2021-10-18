# Read all environmental variables set in the current environment
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,);
# Replace the keys in the config with the values from the environmental variables (if a match is found)
cat /usr/share/nginx/html/config.json | envsubst $EXISTING_VARS | tee /usr/share/nginx/html/config.json

# Start nginx serving the app
nginx -g 'daemon off;'