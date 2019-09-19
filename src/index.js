import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/bookSchema';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', graphqlHTTP({
  schema,
  graphiql: true
}));
app.use(errorHandler);

function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message || 'Unrecoverable error has been occured!');
}

app.listen(4000);