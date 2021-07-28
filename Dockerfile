FROM nginx:alpine
COPY server.js /usr/share/nginx/html/server.js
EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
