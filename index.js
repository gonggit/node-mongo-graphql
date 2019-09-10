import express from 'express';
const booksRouter = require('./src/routes/booksRouter');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/books', booksRouter);
app.use(errorHandler);

function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message || 'Unrecoverable error has been occured!');
}

app.listen(4000);