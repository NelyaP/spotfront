FROM node:13.2-alpine as build
COPY . .
RUN npm i
RUN npm run build

FROM nginx:1.16-alpine
COPY --from=build ./dist /usr/share/nginx/html