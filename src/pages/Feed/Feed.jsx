import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import PostFeed from '../../components/PostFeed/PostFeed';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import * as postsAPI from '../../utils/postService';
import * as likesAPI from '../../utils/likesService';
import {  Grid } from 'semantic-ui-react'

export default function Feed({user, handleLogout}){  

    const [posts, setPosts] = useState([])

    async function handleAddPost(post){

        const data = await postsAPI.create(post);

        // to check to make sure this is working
        console.log(data, ' data')
        // after this we'll want to update state
        // after we get back our new post
        // data is the response from our create function in controllers/posts
        // update the state

        setPosts([data.post,  ...posts])
        // to conifrm this check the devtools for your feed component
        
    }

    // Maybe we need to call a funciton that gets all the posts
    async function getPosts(){
    
        try {
          const data = await postsAPI.getAll();
          setPosts([...data.posts])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }

      async function addLike(postId){
        try {
          const data = await likesAPI.create(postId);
          console.log(data, ' this is from addLike')
          getPosts()
        } catch(err){
          console.log(err)
        }
      }
    
      async function removeLike(likeId){
        try {
          const data = await likesAPI.removeLike(likeId);
          getPosts();
        } catch(err){
          console.log(err)
        }
      }

      useEffect(() => {
        getPosts()
      }, [])

      



    return (
        
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddPostForm handleAddPost={handleAddPost}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <PostFeed posts={posts} isProfile={false} numPhotosCol={1} user={user} addLike={addLike} removeLike={removeLike}/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}