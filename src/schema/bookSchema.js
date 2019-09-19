import graphql from './index';
import Book from '../models/book';

const { GraphQLObjectType, GraphQLString,
  GraphQLID, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;

/**
 * GraphQL Schema
 */
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'BookQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
      }
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery
});