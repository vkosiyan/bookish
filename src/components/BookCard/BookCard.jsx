import React from 'react';
import { Card, Icon, Image, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function BookCard({book, isProfile, user, addFavorite, removeFavorite}) { 

  // find if the user favorited this book
  const favorited = book.favorites.findIndex(favorite => favorite.username === user.username);
  // Return the index of the user if the user has favorited the book, if not favorited will -1
  const clickHandler = favorited > -1 ?  () => removeFavorite(book.favorites[favorited]._id) : () => addFavorite(book._id)
  // lifting up our state in our clickHandler to our fucntion
  const favoriteColor = favorited > -1 ? 'red' : 'grey';

  // another way
  // const favorited = book.favorites.filter(like => like.username === user.username);
  // const clickHandler = favorited.length > 0 ?  () => removeFavorite(favorited._id) : () => addFavorite(book._id)


  return (
    <Card key={book._id}>

              <Image
                  floated='left'
                  size='large'
                  avatar
                  src={book.imageLink}  />          
    
      
      <Image src={`${book.imageLink}`} wrapped ui={false} />
      <Card.Content>
      <Card.Description>
      {book.title}
        {book.description}
      </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}>
        <Icon name={'heart'} size='large' color={favoriteColor} onClick={clickHandler} />
        {book.favorites.length} Favorites
          
      </Card.Content>
    </Card>
  );
}

export default BookCard;