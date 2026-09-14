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

# Build the React app
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Expose the port where the app will be served
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
