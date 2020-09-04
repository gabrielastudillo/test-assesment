# Content 

This app is a mock of one of a public API.

# Getting started 

## The stack 

The mock API is built with: 

* [fastify](https://github.com/fastify/fastify): framework to build web APIs
[![alt text](https://raw.githubusercontent.com/fastify/graphics/master/full-logo.png "Fastify")](https://www.fastify.io/)

Fastify plugins:
* [fastify-jwt](https://github.com/fastify/fastify-jwt): JWT utils
* [fastify-plugin](https://github.com/fastify/fastify-plugin): Makes import of plugins easier in Fastify
* [fastify-swagger](https://github.com/fastify/fastify-swagger): documentation generator for API routes

Other modules:
* [nodemon](https://github.com/remy/nodemon) (dev only): hot-reloading on code changes.
* [db-migrate](https://github.com/db-migrate/node-db-migrate): tool for database migration management
* [db-migrate-mysql](https://github.com/db-migrate/mysql): mysql connector for db-migrate
* [dotenv](https://github.com/motdotla/dotenv): loads variables in `process.env`
* [moment](https://github.com/moment/moment): tool for time and durations
* [mysql](https://github.com/mysqljs/mysql): driver for MySQL database
* [seedrandom](https://github.com/davidbau/seedrandom): random number generator
* [uuid](https://github.com/uuidjs/uuid): UUID generator

## To run it locally 

Clone the respository and `cd` into it.
docker
Make sure you set the right environment variables:
```
DB_HOST: localhost
DB_USER: user
DB_PASSWORD: password
DB_NAME: mock_api_db
DB_POOL_CONNECTION_LIMIT: 10
DB_PORT: 1246 
```

Install dependencies
```
> npm install
```

Generate an SSL certificate and key (cert.crt and cert.key) and place them into the ssl folder
Run the provided `docker-compose-assessment.yml`.

Run the app:
```
> npm start
```


## Sample call

```
https://server:3000/gme?Action=CreateApp&Version=1&SecretId=somesecretid&Timestamp=1574095500&Signature=asignature&Nonce=1
```


# Database migrations

See documentation for usage: https://db-migrate.readthedocs.io/en/latest/Getting%20Started/usage/

## To use db-migrate commands outside the container, make sure you have db-migrate installed globally.

Instructions for linux:

```
su root
npm install -g db-migrate
exit
```


