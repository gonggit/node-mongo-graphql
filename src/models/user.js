import db from '../config/database';

const UserSchema = new db.Schema({
  email: {
    type: String,
    required: true,
    validate: [
      email => email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/),
      'Please enter valid email address.',
    ],
  },
  password: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    required: false,
    default: true,
  }
});

UserSchema.index({ email: 1 }, { unique: true });

export default db.model('User', UserSchema);
