const Book = require('../models/book');

module.exports = {
    create,
    index
};

function create(req, res){
    console.log('HITTING BOOKS IN CONTROLLERS', req.body)

        const newBook = new Book.create({...req.body});
 
        // try {
        //     await newBook.save();
        //     const token = createJWT(user);
        //     res.json({ token });
        //   } catch (err) {
        //     // Probably a duplicate email
        //     res.status(400).json(err);
        //   }
  
    

}

// function create(req, res) {
//     const tvshow = new Tvshow(req.body);
//     // Assigns the logged in user's id
//     tvshow.user = req.user._id;
//     tvshow.username = req.user.name;
//     tvshow.save(function(err) {
//       if (err) return render('tvshows/new');
//       res.redirect(`/tvshows/${tvshow._id}`);
//     });
//   }
  


async function index(req, res){
    try {
        // this populates the user when you find the posts
        // so you'll have access to the users information 
        // when you fetch teh posts
        const books = await Book.find({}).populate('user').exec() // userSchema.set('toObject') gets invoked, to delete the password
        // when we populate the user so we don't have to worry about sending over the password!
        res.status(200).json({posts})
    } catch(err){

    }
}