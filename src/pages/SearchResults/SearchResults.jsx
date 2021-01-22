import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';

import BookSearch from '../../components/BookSearch/BookSearch';



export default function SearchResults({props, user, handleLogout, setResults, results, searchText, setSearchText}){  
  
    return (
        <div>
            {console.log("HELLO")}
   

            <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
        
            <Container text style={{ marginTop: '15em' }}>
            <BookSearch setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
            </Container>


       

      <Container textAlign='center'>
        <PageFooter />
       </Container>

       </div>
    )
}