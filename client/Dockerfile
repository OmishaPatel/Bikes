FROM node:14.16.0 as builder

LABEL version="1.0"
LABEL description="Production image for react for Bike Shop"

WORKDIR /app

COPY ./package.json ./


RUN npm install

COPY . . 


RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

