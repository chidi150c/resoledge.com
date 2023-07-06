# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR /webapp

# Copy the build folder from your local machine to the working directory in the container
# COPY build/* .
COPY package.json ./

RUN npm install --only=production

# Copy the application code to the container
COPY src ./src
COPY public ./public
COPY Dockerfile .
          
# Build the application
RUN npm run build

# Remove unnecessary files
RUN rm -rf src public Dockerfile package*.json node_modules

# Set the working directory for the built application
WORKDIR /webapp/build

# Install 'serve' globally
RUN npm install -g serve
# Expose the port on which your application listens
EXPOSE 3000

# Startthe React app using 'serve'
CMD ["serve", "-s", ".", "-l", "3000"]
