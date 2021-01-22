import React from 'react';
import { Card  } from 'semantic-ui-react'
import BookCard from '../BookCard/BookCard';


export default function BookFeed({posts, isProfile, numPhotosCol, user, addFavorite, removeFavorite}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {posts.map((post) => {
                return ( 
                        <BookCard post={post} key={post._id} isProfile={isProfile} user={user} addLike={addFavorite} removeLike={removeFavorite}/>
                    )
                })}
        </Card.Group>
  
    )
}