import Book from '../../models/book';

export default {
  book: async (args) => {
    const { title } = args;
    return Book.findOne({ title });
  },
  books: () => Book.find({}),
};
