FROM node:12.16-alpine

LABEL maintainer="z@benwk.com"

# 设置构建变量
ARG sde=test

# 设置环境变量
ENV NODE_ENV production
ENV HOST 0.0.0.0

# 设置应用目录
WORKDIR /app
RUN mkdir -p /app
COPY . /app

# 增加启动脚本
RUN chmod +x docker-entrypoint.sh

# 构建应用
RUN npm install --production --silent
RUN npm run build:ssr

# 设置容器端口
EXPOSE 80

# 容器启动命令
CMD ["npm","run","serve:ssr"]