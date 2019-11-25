FROM node:10

RUN apt update && apt -y upgrade
# Install system dependencies for cypress
RUN apt-get -y install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

# Install Chrome
RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get -y update
RUN apt-get -y install google-chrome-stable
# Clear the apt cache to reduce image size
RUN rm -rf /var/cache/apt/*

# Create app directory
COPY . /devops
WORKDIR /devops

ENV NODE_ENV "production"

RUN npm install
RUN npm install cypress -g

ENTRYPOINT cypress run --browser chrome --reporter junit --reporter-options mochaFile=test_result.xml