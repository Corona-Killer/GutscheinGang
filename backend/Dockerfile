FROM openjdk:11-jre-slim
EXPOSE 8080
ARG DEPENDENCY=build/libs
COPY ${DEPENDENCY}/gutschein-gang-0.0.1-SNAPSHOT.jar /app/lib/
ENTRYPOINT ["java","-jar","/app/lib/gutschein-gang-0.0.1-SNAPSHOT.jar"]
