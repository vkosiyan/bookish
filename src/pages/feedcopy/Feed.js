import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import * as booksAPI from '../../utils/bookService';
import {  Grid } from 'semantic-ui-react'
import FavoritesFeed from '../../components/FavoritesFeed/FavoritesFeed';


export default function Feed({user, handleLogout, searchText, setSearchText, setResults, results, books, setBooks}){  


    // Maybe we need to call a funciton that gets all the books
    async function getBooks(){
    
        try {
          const data = await booksAPI.getAll();
          setBooks([...data.books])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }

    //   async function addFavorite(postId){
    //     try {
    //       const data = await likesAPI.create(postId);
    //       console.log(data, ' this is from addFavorite')
    //       getBooks()
    //     } catch(err){
    //       console.log(err)
    //     }
    //   }
    
    //   async function removeFavorite(likeId){
    //     try {
    //       const data = await likesAPI.removeFavorite(likeId);
    //       getBooks();
    //     } catch(err){
    //       console.log(err)
    //     }
    //   }

      useEffect(() => {
        getBooks()
      }, [])

      



    return (
        
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            {/* <AddToFavorites handleAddBook={handleAddBook}/> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <FavoritesFeed books={books} numPhotosCol={1} user={user}/>

        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}