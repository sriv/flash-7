FROM node

RUN apt-get update && apt-get install -q -y \
    apt-transport-https \
    gnupg2 \
    ca-certificates && \
    apt-key adv --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys 023EDB0B && \
    echo deb https://dl.bintray.com/gauge/gauge-deb stable main | tee -a /etc/apt/sources.list && \
    apt-get update && apt-get install gauge &&\
    mkdir -p $HOME/foo

ENV PATH=$HOME/.gauge:$PATH FLASH_SERVER_PORT=8090
ADD . $HOME/foo
WORKDIR $HOME/foo
ENTRYPOINT ["gauge", "run"]