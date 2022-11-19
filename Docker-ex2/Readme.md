# Below commands use to run this example, This example is for docker and docker-compose

# Docker build with tag
docker build -t marlanfer/visits .

# Docker run using tag and port mapping

docker run -p 8080:8080 marlanfer/visits

# Docker run image in the background
docker run -d image

# Docker compose - related commands

docker run image -> docker-compose up ( in here we are not mentioning the image name)

docker build .
docker run image 
    - for both <code> docker-compose up --build </code>

## Docker-compose stop
    - Launch in background  
        docker-compose up -d

    - Stop docker stop
        docker-compose down

 
# Docker restart policies
    - no -> will not restart
    - always ->  restart always
    - on-failure -> restart on failure
    - unless-stopped -> restart unless the service is stopped