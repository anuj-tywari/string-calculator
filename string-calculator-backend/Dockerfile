# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build the application
RUN npm run build

# Expose the port where the app will run
EXPOSE 3000

# Start the app in production mode
CMD ["npm", "run", "start:prod"]
