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

  const favoritedSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
  })

  // const wantToReadSchema = mongoose.Schema({
  //   username: String,
  //   userId: { type: mongoose.Schema.Types.ObjectId }
  // })

const bookSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    id: Number,
    authors: String,
    imageLink: String,
    description: String,
    review: [reviewSchema],
    usersFavorited: [favoritedSchema]
    });

module.exports = mongoose.model('Book', bookSchema);

