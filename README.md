# node-mongo-graphql

Simple webserver with NodeJS + ExpressJS + MongoDB + GraphQL

## Prerequisite

Witn NPM, you can install dependent modules like

    npm install

Also, you can start node application with

    npm start

It starts node application with nodemon to restart your app without restart.

All versions of dependent modules are specified in packages.json.

Also, you must install [mongoDB](https://docs.mongodb.com/manual/installation/) and start it before start app.

## Usage

After running application, you can request using HTTP to create or get books from database.

For example, you can post request to create book like this.
```
curl -X POST http://localhost:4000/books/title -H "Content-Type:application/json" -d '{"title":"My life", "author":"gonggit"}'
```

You can verify that new document is created at book collection.
Also, you can verify that book using API.

```
curl http://localhost:4000/books/My_life
```

## Etc

1. There is (title, author) unique key constration on book document.
2. Fork this repository, and you can do anything you want!
