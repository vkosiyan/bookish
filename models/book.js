const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    wouldRecommend: String,
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    review: String
  }, {
    timestamps: true
  });

  const usersFavoritedSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
  })

const bookSchema = new Schema({
    id: Number,
    review: [reviewSchema],
    usersFavorited: [usersFavoritedSchema],
    });

module.exports = mongoose.model('Book', bookSchema);

