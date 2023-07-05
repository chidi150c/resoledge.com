# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR /webapp

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your application listens
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "start" ]
