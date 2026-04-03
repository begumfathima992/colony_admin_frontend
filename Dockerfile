# --- Stage 1: Build Stage ---
FROM node:20-slim AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# --- Stage 2: Production Stage ---
FROM nginx:stable-alpine

# Copy the build output
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# ✅ THIS IS THE FIX: Create a custom Nginx config to handle React Router
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]