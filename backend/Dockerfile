FROM openjdk:11-jdk-alpine
EXPOSE 8080
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG DEPENDENCY=build/libs
COPY ${DEPENDENCY}/gutschein-gang-0.0.1-SNAPSHOT.jar /app/lib
ENTRYPOINT ["java","-jar","/app/lib/gutschein-gang-0.0.1-SNAPSHOT.jar"]
