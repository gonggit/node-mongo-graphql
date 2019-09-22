import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import typeDefs from './graphql/types/index';
import rootValue from './graphql/resolvers/index';

var app = express();

const schema = buildSchema(typeDefs);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true
}));
app.use(errorHandler);

function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message || 'Unrecoverable error has been occured!');
}

app.listen(4000);