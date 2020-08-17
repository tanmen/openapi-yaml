FROM node:14-alpine
WORKDIR /home
RUN npm install -g --unsafe-perm openapi-yaml@1.0.1
ENTRYPOINT ["openapi-yaml"]
