# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR /webapp

# Copy the build folder from your local machine to the working directory in the container
# COPY build/* .
COPY package.json package-lock.json ./

RUN npm ci --only=production
COPY . .
RUN  npm run build 

# Install 'serve' globally
RUN npm install -g serve
# Expose the port on which your application listens
EXPOSE 3000

# Startthe React app using 'serve'
CMD ["serve", "-s", ".", "-l", "3000"]
