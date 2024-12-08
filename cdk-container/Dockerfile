FROM node:20
# ARG AWS_ACCESS_KEY_ID
# ARG AWS_SECRET_ACCESS_KEY

# update apt-get
RUN apt-get update -y && apt-get upgrade -y

RUN wget https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip \
  && unzip awscli-exe-linux-x86_64.zip \
  && ./aws/install \
  # Clean up
  && rm -f awscli-exe-linux-x86_64.zip

ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 20.18.1
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash \
  && . $HOME/.nvm/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default \
  && node -v && npm -v && which npm

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
RUN node -v
RUN npm -v
RUN npm install -g aws-cdk@2.172

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH $PATH:/root/.bun/bin/
RUN bun -v

# change work directory
RUN mkdir -p /app
WORKDIR /app/app

###
### インストールパス関係の情報
###
# which node
# /root/.nvm/versions/node/v18.17.1/bin/node
# which npm
# /root/.nvm/versions/node/v18.17.1/bin/npm

