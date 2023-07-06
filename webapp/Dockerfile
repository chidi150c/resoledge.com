# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR /webapp

# Copy the built files from the runner machine to the working directory
COPY /build ./

# Install any necessary dependencies (if applicable)
# RUN npm ci --production

# Expose the port on which your application listens
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "start" ]
