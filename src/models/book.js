import db from '../config/database';

const BookSchema = new db.Schema({
  title: {
    type: String,
    required: true,
    validate: [
      (title) => {
        return !title.includes(' ');
      },
      'Space in title must be replaced with underscore'
    ]
  },
  author: {
    type: String,
    required: false
  },
});

BookSchema.index({ title: 1, author: 1 }, { unique: true });
export default db.model('Book', BookSchema);
