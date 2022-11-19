FROM node:14-alpine

WORKDIR /usr/app 
#make the usr/app as the default working directory

COPY ./package.json ./
RUN npm install
#this way we can stop reinstalling npm packages if that does not have any changes included.


COPY ./ ./

CMD ["npm","start"]