import React from 'react';
import { Card  } from 'semantic-ui-react'
import BookCard from '../BookCard/BookCard';


export default function FavoritesFeed({books, isProfile, numPhotosCol, user, addFavorite, removeFavorite}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {books.map((book) => {
                    {console.log('I AM BOOK', books)}
                return ( 
                        <BookCard book={book} key={book._id} isProfile={isProfile} user={user} addLike={addFavorite} removeLike={removeFavorite}/>
                        
                    )
                })}
        </Card.Group>
  
    )
}