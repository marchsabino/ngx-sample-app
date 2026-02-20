FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --from=build /app/dist/ngx-sample-app/browser /usr/share/nginx/html
EXPOSE 80
