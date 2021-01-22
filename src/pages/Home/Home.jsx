import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';




export default function Home({props, user, handleLogout, setResults, results, searchText, setSearchText}){  
  
    return (
        <div>
   

        <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
     
        <Container text style={{ marginTop: '7em' }}>

        </Container>


       

      <Container textAlign='center'>
       <PageFooter/>
       </Container>

       </div>
    )
}