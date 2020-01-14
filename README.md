# Issue https://github.com/getgauge/flash/issues/7

- git clone git https://github.com/sriv/flash-7.git
- docker build -t foo .
- sudo docker run -p 8081:8090 foo

note that the forwarded port should not be the same as 8090 (which is set as FLASH_SERVER_PORT in the Dockerfile)

- observe http://127.0.0.1:8081 in host
- inspect code and see that `initWS` method tries to connect to http://127.0.0.1:8090 (which is the guest port, not visible to the host)

- flash works if the forwarded port is same as FLASH_SERVER_PORT (i.e.`docker run -p 8090:8090 foo`)
