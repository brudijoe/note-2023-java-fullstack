# Use an offical Node runtime as a parent image
FROM node
# Set the working directory to /note-client
WORKDIR /note-client
# Copy package.json and package-lock.json to the container
COPY package.json .
COPY package-lock.json .
# Install dependencies
RUN npm install
# Copy the rest of the application code to the container's working directory
COPY . .
# Expose port 5173 to the browser
EXPOSE 5173
# Run the command to start the server "npm run dev"
CMD ["npm", "run", "dev"]