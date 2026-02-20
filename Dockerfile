FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
# Overwrite the default config to prevent the "Welcome to nginx" page
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the browser files specifically
COPY --from=build /app/dist/ngx-sample-app/browser /usr/share/nginx/html
EXPOSE 80
