server {
    listen 80;
    server_name: tradingpost13rms.com;

    location / {
        root /home/ubuntu/13RMS_NEW/backend/build/static;
        try_files $uri $uri/ @apachesite;

        expires max;
        access_log off;
    }

    location @apachesite {
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:3005;
    }
}