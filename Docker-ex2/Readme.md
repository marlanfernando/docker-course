# Below commands use to run this example, This example is for docker and docker-compose

</line>

## Docker build with tag
<code>docker build -t marlanfer/visits . </code>

## Docker run using tag and port mapping

<code>docker run -p 8080:8080 marlanfer/visits</code>

## Docker run image in the background
<code>docker run -d image</code>

## Docker compose - related commands

docker run image -> <code>docker-compose up</code> ( in here we are not mentioning the image name)

docker build .
docker run image 
    - for both <code> docker-compose up --build </code>

## Docker-compose stop
    - Launch in background  
        docker-compose up -d

    - Stop docker stop
        docker-compose down

 
## Docker restart policies
    - no -> will not restart
    - always ->  restart always
    - on-failure -> restart on failure
    - unless-stopped -> restart unless the service is stopped
