FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine-slim

COPY --from=builder /app/build /usr/share/nginx/html/

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
