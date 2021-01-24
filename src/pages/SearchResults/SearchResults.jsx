import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import * as booksAPI from '../../utils/bookService';

import BookSearch from '../../components/BookSearch/BookSearch';



export default function SearchResults({user, handleLogout, setResults, results, searchText, setSearchText}){  
    const [books, setBooks] = useState([])
    async function handleAddBook(book){
        
        const data = await booksAPI.create(book);

        // to check to make sure this is working
        console.log('I AM DATA INSEARCH RESTULS', book, ' data')
        // after this we'll want to update state
        // after we get back our new post
        // data is the response from our create function in controllers/posts
        // update the state

        // setBooks([data.book,  ...books])
        // to conifrm this check the devtools for your feed component        
    }

  
    return (
        <div>
            {console.log("HELLO")}
   

            <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
        
            <Container text style={{ marginTop: '15em' }}>
            <BookSearch setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} handleAddBook={handleAddBook} />
            </Container>


       

      <Container textAlign='center'>
        <PageFooter />
       </Container>

       </div>
    )
}