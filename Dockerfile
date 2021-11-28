FROM node AS build-stage

WORKDIR /app-root
RUN mkdir app
WORKDIR /app-root/app
COPY package*.json .
COPY angular.json .
COPY tsconfig*.json .

RUN npm install
RUN chmod 777 /app-root/app/node_modules

COPY src ./src

RUN npm run build

FROM nginx:alpine
COPY --from=build-stage /app-root/app/build /usr/share/nginx/html
