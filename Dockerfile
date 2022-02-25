# Stage 1
FROM node:12-alpine AS build 
WORKDIR /app-root
COPY package.json .
# no need for this since you put your workdir path
# RUN cd /usr/src/sample 
RUN npm install 
COPY . .

# Stage 2
FROM nginx:1.17.1-alpine 
COPY --from=build /app-root/dist/asianPearl /usr/share/nginx/html/