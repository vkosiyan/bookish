const Book = require('../models/book');

module.exports = {
    create
};

function create(req, res){
    try {
        const book = Book.findOne({id: req.body.id});
        console.log(book, ' this book')
        if (book) return res.status(401).json({err: 'already a book'});
        // had to update the password from req.body.pw, to req.body password
       
        const newBook = Book.create({id: req.body.id});

      } catch (err) {
        return res.status(401).json(err);
      }
}


// async function index(req, res){
//     try {
//         // this populates the user when you find the posts
//         // so you'll have access to the users information 
//         // when you fetch teh posts
//         const books = await Book.find({}).populate('user').exec() // userSchema.set('toObject') gets invoked, to delete the password
//         // when we populate the user so we don't have to worry about sending over the password!
//         res.status(200).json({posts})
//     } catch(err){

//     }
// }