const Tvshow = require('../models/book');
const reviews = require('./reviews');

module.exports = {
    create
};

function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        // const filePath = `${uuidv4()}/${req.file.originalname}`
        // const params = {Bucket: 'catcollectvk', Key: filePath, Body: req.file.buffer};
        // s3.upload(params, async function(err, data){
        //         // data.Location is the address where our image is stored on aws
        //     const post = await Post.create({caption: req.body.caption, user: req.user, photoUrl: data.Location});
        //     const populatedUserPost = await post.populate('user').execPopulate();
        //     res.status(201).json({post: populatedUserPost})
        // })


    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}
