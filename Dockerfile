FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist/ngx-sample-app /usr/share/nginx/html
EXPOSE 80
