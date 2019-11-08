FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm install && \\
    npm run build

FROM nginx:venkyAv8

COPY --from=builder /app/dist/* /user/share/nginx/html/