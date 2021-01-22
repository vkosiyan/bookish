import React, { useState, useEffect } from 'react';
import PageHeader from '../Header/Header';

import * as booksAPI from '../../utils/postService';
import * as likesAPI from '../../utils/likesService';
import {  Grid } from 'semantic-ui-react'
import AddToFavorites from '../AddToFavorites/AddToFavorites';

export default function Feed({user, handleLogout}){  

    const [books, setBooks] = useState([])

    async function handleAddBook(book){

        const data = await booksAPI.create(book);

        // to check to make sure this is working
        console.log(data, ' data')
        // after this we'll want to update state
        // after we get back our new post
        // data is the response from our create function in controllers/books
        // update the state

        setBooks([data.book,  ...books])
        // to conifrm this check the devtools for your feed component
        
    }

    // Maybe we need to call a funciton that gets all the books
    async function getBooks(){
    
        try {
          const data = await booksAPI.getAll();
          setBooks([...data.books])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }

      async function addFavorite(postId){
        try {
          const data = await likesAPI.create(postId);
          console.log(data, ' this is from addFavorite')
          getBooks()
        } catch(err){
          console.log(err)
        }
      }
    
      async function removeFavorite(likeId){
        try {
          const data = await likesAPI.removeFavorite(likeId);
          getBooks();
        } catch(err){
          console.log(err)
        }
      }

      useEffect(() => {
        getBooks()
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
            <AddToFavorites handleAddBook={handleAddBook}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <FavoritesFeed books={books} isProfile={false} numPhotosCol={1} user={user} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}