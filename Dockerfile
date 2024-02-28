# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Bundle the app source
COPY . .

# Make port available to the world outside this container
EXPOSE 3000

# Define the command to run your app
CMD [ "node", "backend/index.js" ]