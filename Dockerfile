# Base image for account microservice.  This image uses amd64 as the architecture 
FROM amd64/node:18-bullseye

# Specifies app directory as working directory in docker image
WORKDIR /app

# Exposes port 3000 which is the same port specified in vite.config.ts
EXPOSE 3000

# Copy config files to app directory in docker image
COPY package.json package-lock.json ./

# Install all dependencies to run account microservice in silent mode
RUN npm install --silent

# Copy all other files to app directory in docker image
COPY . ./

# run the command specified in the package.json to start the console microservice
CMD ["npm", "run", "dev"]