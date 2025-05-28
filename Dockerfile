# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Optionally add custom nginx.conf for SPA routing
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
