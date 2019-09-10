import Book from '../models/book';

exports.getByTitle = async (req, res, next) => {
  const { params: title } = req;
  if (title === undefined) {
    res.status(404).send({ error: 'book is not found.' });
  }
  try {
    const book = await Book.findOne({ title });
    res.send(book);
  } catch (e) {
    next(e);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const book = await Book.create({
      title: req.body.title.replace(/\s/g, '_'),
      author: req.body.author,
    });
    res.send(book);
  } catch (e) {
    next(e);
  }
};
