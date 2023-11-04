FROM openjdk:11
ADD ./target/plant-service-0.0.1-SNAPSHOT.jar /usr/src/plant-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "plant-service-0.0.1-SNAPSHOT.jar"]
