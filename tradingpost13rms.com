server {
    listen 80;
    server_name tradingpost13rms.com;


    location /static {
        autoindex on;
        alias /home/ubuntu/13RMS_NEW/backend/build/static;
    }

    location / {
       proxy_pass http://127.0.0.1:3005;
    }   

}