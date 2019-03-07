# Specify a base image
FROM node:alpine

#By using WORKDIR it ensures no files in the container are overwritten.
WORKDIR /usr/app

#Copy in files in the current directory 2 arguments copy from ./ in the directory  to the ./ in the container
COPY ./package.json ./

#Install dependencies from npm
RUN npm install

COPY ./ ./
# Default command
CMD ["npm", "start"]
