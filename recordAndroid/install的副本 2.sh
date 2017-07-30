ls ~/nvm || git clone https://git.oschina.net/yaniswang/nvm.git ~/nvm
source ~/nvm/nvm.sh
export NVM_NODEJS_ORG_MIRROR="http://npm.taobao.org/mirrors/node"
nvm install v7.10.0
npm install --registry=https://registry.npm.taobao.org
