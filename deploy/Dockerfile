# Dockerfile to build a deployable image of the webapp

# Build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
# Copy the application into the container
COPY . .
# Copy config template into the public folder and rename it
RUN cp ./config.tmpl.json ./public/config.json
# Build the app
RUN SKIP_PREFLIGHT_CHECK=true yarn build

# Deployable image
FROM nginx:alpine as production-stage
# Copy the build output of the build stage into this stage
COPY --from=build-stage /app/build /usr/share/nginx/html
# Add the scripts to setup the environmental variables and to start nginx
COPY ./deploy/start-nginx.sh /usr/bin/start-nginx.sh
# Make the script executable
RUN chmod +x /usr/bin/start-nginx.sh
# Expore http/s ports on which the app will be reachable
EXPOSE 80
# Serve the app
# The scripts first expands the config and then starts the web server
CMD ["/usr/bin/start-nginx.sh"]
