
### STAGE 1: Build ###
FROM node:12.13-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
#RUN wget https://dl.eff.org/certbot-auto
#RUN mv certbot-auto /usr/local/bin/certbot-auto 
#RUN chown root /usr/local/bin/certbot-auto 
#RUN chmod 0755 /usr/local/bin/certbot-auto
#RUN /usr/local/bin/certbot-auto --nginx
#RUN echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && /usr/local/bin/certbot-auto renew -q" | tee -a /etc/crontab > /dev/null
