import React, { useState } from 'react';

import { Button, Form, Segment } from 'semantic-ui-react'

export default function AddToFavorites({bookId, bookTitle, bookAuthors, bookDescription, bookImage}){
  const [state, setState] = useState({
    // id: '',
    // title: '',
    // authors: '',
    // description: '',
    // imageLink: ''
    id: bookId,
    title: bookTitle,
    authors: bookAuthors,
    description: bookDescription,
    imageLink: bookImage
  })

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             

    // Have to submit the form now! We need a function!
  }



  return (
    
  
        <Segment>    
              <Form  autoComplete="off" onSubmit={handleSubmit}>
        
              <Form.Input
                  className="form-control"
                  name="id"
                  value={bookId}
                  onChange={handleChange}
                  required
                  type="hidden"                  
              />   
              <Form.Input
                  className="form-control"
                  name="title"
                  value={bookTitle}
                  onChange={handleChange}
                  required
                  type="hidden"                      
              />   
              <Form.Input
                  className="form-control"
                  name="authors"
                  value={bookAuthors}
                  onChange={handleChange}
                  required
                  type="hidden"                     
              />   
              <Form.Input
                  className="form-control"
                  name="description"
                  value={bookDescription}
                  onChange={handleChange}
                  required
                  type="hidden"                     
              />   
              <Form.Input
                  className="form-control"
                  name="imageLink"
                  value={bookImage}
                  onChange={handleChange}
                  required
                  type="hidden"                     
              />   
              <Button
                type="submit"
                className="btn"
              >
                Add to Favorites
              </Button>


            </Form>

          </Segment>
     
   
  ); 
}