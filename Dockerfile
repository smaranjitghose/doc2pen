# Create a NODE image
FROM node:alpine
# Make a working directory
WORKDIR /app
# Move the package.json to the root folder
COPY package*.json .
# Get all our dependencies
RUN npm install
# Copy all the content to our working directory
COPY . /app
# Start our application
CMD [ "npm" , "start"]
