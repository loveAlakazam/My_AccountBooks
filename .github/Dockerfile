FROM node:18-alpine

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json and package-lock.json are copied
COPY package*.json ./

# install app dependencies
RUN npm install

# bundle app source
COPY . .

# Copy the .env and .env.development files
COPY .env .env.* ./

# Create a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3001

# Start the server using the production build
CMD ["npm", "run", "start:prod"]
