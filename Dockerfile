# Builder stage
FROM docker.io/library/node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Final stage
FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine-slim
COPY --from=builder /app/build /usr/share/nginx/html/
EXPOSE 5173
