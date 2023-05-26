# Use Node.js 18 as the base image
FROM node:18-slim

# Install Python and its dependencies for @newrelic/native-metrics build
# Add make command
RUN apt-get update && apt-get install -y build-essential
# Add python3
RUN apt-get update && apt-get install -y python3

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]
