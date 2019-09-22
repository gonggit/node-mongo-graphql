import Book from '../../models/book';

export default {
  book: async (args) => {
    const title = args.title;
    return await Book.findOne({ title: title });
  },
  books: () => {
    return Book.find({});
  },
}