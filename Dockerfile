from node:16-alpine as builder
workdir /app
copy package.json .
run npm install
copy . .
cmd ["npm", "run", "build"]

from nginx
# copy everything from /app/build form the the builder stage 
# to the /usr/share/nginx/html folder in the nginx image
copy --from=builder /app/build /usr/share/nginx/html
# default command already set to run nginx in foreground
# it will serve the content of /usr/share/nginx/html