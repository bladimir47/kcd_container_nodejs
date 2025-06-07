FROM  node:latest
WORKDIR /opt
COPY package.json ./
RUN npm install && \
    npm install pm2@latest -g
COPY . .
EXPOSE 80
CMD ["pm2-runtime", "index.js"]
