const Post = require('../models/book');

module.exports = {
    create,
    deleteWantToRead
}

async function create(req, res){
 
    try {
        const post = await Post.findById(req.params.id);
        post.wantToRead.push({username: req.user.username, userId: req.user._id}); //mutating a document
        await post.save()// save it
        res.status(201).json({data: 'like added'})
    } catch(err){
       
        res.json({data: err})
    }
    
}

async function deleteWantToRead(req, res){
    try {
        
        const post = await Post.findOne({'wantToRead._id': req.params.id, 'wantToRead.username': req.user.username});
        post.wantToRead.remove(req.params.id) // mutating a document
        await post.save() // after you mutate a document you must save
        res.json({data: 'like removed'})
    } catch(err){
        res.json({error: err})
    }
}