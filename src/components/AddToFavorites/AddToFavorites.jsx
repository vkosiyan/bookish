import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import * as bookService from '../../utils/bookService';


export default function AddToFavorites({bookId, bookTitle, bookImage, bookDescription, bookAuthors, handleAddBook}){
  const [state, setState] = useState({
    id: `${bookId}`,
    title: `${bookTitle}`,
    authors: `${bookAuthors}`,
    description: `${bookDescription}`,
    imageLink: `${bookImage}`
    // id: currentBook.id,
    // title: currentBook.title,
    // authors: currentBook.authors,
    // description: currentBook.description,
    // imageLink: currentBook.imageLinks
  })

    function handleSubmit(e){
    e.preventDefault()
    // setState({
    //   ...state,
    // id: `${bookId}`,
    // title: `${bookTitle}`,
    // authors: `${bookAuthors}`,
    // description: `${bookDescription}`,
    // imageLink: `${bookImage}`
    // })
    console.log('I AM NEW STATE', state)
    console.log(bookDescription)
    handleAddBook(state)           

    // Have to submit the form now! We need a function!
  }



  return (
    
  
        <Segment>    
              <Button onClick={handleSubmit}>Add to Favorites</Button>

          </Segment>
     
   
  ); 
}