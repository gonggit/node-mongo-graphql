import mongoose from 'mongoose';

const config = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

mongoose.connect('mongodb://localhost:27017/test', config);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', () => {
  console.log('db connected!');
});

export default mongoose;
