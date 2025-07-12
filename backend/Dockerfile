# Backend Dockerfile
FROM node:20-alpine
WORKDIR /backend
COPY . .
RUN npm install && npm run build
EXPOSE 5000
CMD ["npm", "start"]
