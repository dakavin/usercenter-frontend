FROM nginx
WORKDIR /usr/share/nginx/html/
USER root
COPY nginx/config.d /etc/nginx/conf.d
COPY ./dist  /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# 测试两个库
