import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid, Divider } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import axios from 'axios';  
import { Link, useHistory } from 'react-router-dom'



export default function Home({props, user, handleLogout, setResults, results, searchText, setSearchText, bestSellerBooks, setBestSellerBooks}){  
    const listURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/2020.json?api-key=";
    const apiKey = 'YF4jFW7MyybdTuz3s6uLGAoUcFZqULxg';


    useEffect(() => {
        const url = `${listURL}${apiKey}`
        
        
    
        const makeApiCall = async () => {
          const res  =  await fetch(url)
          const json = await res.json()

          const bestSellingBooks = json.results
          console.log("I am JSON", json.results)
          setBestSellerBooks(bestSellingBooks)
        }
        makeApiCall()   
    
      },[])

  
    return (
        <div>
   

        <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
     
        <Container text style={{ marginTop: '7em' }}>

        </Container>

        {bestSellerBooks.map((book, idx) => (  

        <Grid celled='internally' key={idx}>

            <Grid.Row>
            <Grid.Column width={3}>
                
            </Grid.Column>
            <Grid.Column width={13}>
            <h3>Title: {book.title}</h3>
            <h4>Authors: {book.author}</h4> 
            
            <p>Description: {book.description}...</p>
            
            

            <Link to={"/books/" + book.id}><button class="ui primary button">Details</button></Link>
            </Grid.Column>
            </Grid.Row>
    <Divider section />
</Grid>


))} 

       

      <Container textAlign='center'>
       <PageFooter/>
       </Container>

       </div>
    )
}