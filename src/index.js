import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import typeDefs from './graphql/types/index';
import rootValue from './graphql/resolvers/index';

const app = express();

const schema = buildSchema(typeDefs);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

function errorHandler(err, req, res) {
  res.status(err.status || 500);
  res.send(err.message || 'Unrecoverable error has been occured!');
}
app.use(errorHandler);

app.listen(4000);
