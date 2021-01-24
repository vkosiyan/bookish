import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import * as bookService from '../../utils/bookService';


export default function AddToFavorites({bookId, bookImage, currentBook}){
  const [state, setState] = useState({
    id: '',
    title: '',
    authors: '',
    description: '',
    imageLink: ''
    // id: currentBook.id,
    // title: currentBook.title,
    // authors: currentBook.authors,
    // description: currentBook.description,
    // imageLink: currentBook.imageLinks
  })

    function handleSubmit(e){
    e.preventDefault()
    setState({
      ...state,
    id: `${bookId}`,
    title: `${currentBook.title}`,
    authors: `${currentBook.authors}`,
    description: `${currentBook.description}`,
    imageLink: `${bookImage}`
    })
    bookService.create(state);
    console.log(state)


             

    // Have to submit the form now! We need a function!
  }



  return (
    
  
        <Segment>    
              <Button onClick={handleSubmit}>Add to Favorites</Button>

          </Segment>
     
   
  ); 
}