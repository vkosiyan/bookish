import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Segment, Container, Grid, Divider, Rating, Image, Card } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import axios from 'axios';  
import { Link, useHistory } from 'react-router-dom'



export default function Home({user, handleLogout, setResults, results, searchText, setSearchText, bestSellerBooks, setBestSellerBooks, bestSellerInfo, setBestSellerInfo}){  
    const listURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/2020.json?api-key=";
    const nyTimesApiKey = 'YF4jFW7MyybdTuz3s6uLGAoUcFZqULxg';
    const bestSellerNoIsbnInfoArray = [];
    const bestSellerInfoArray = [ ];
    let newArray = null;
    let isbnArray = [];

     console.log('BEFORE ANYTHIING PUSHED', typeof bestSellerInfoArray)

    const googleApiKey = 'AIzaSyB2MR9Aytx1NBrLhcns0k2UAd0RfsemqlE';               

    useEffect(() => {

        const url = `${listURL}${nyTimesApiKey}`   

        
    
        const makeApiCall = async () => {
          const res  =  await fetch(url)
          const json = await res.json()

          const bestSellingBooks = json.results
          
          {bestSellingBooks.map((book, idx) => (
            book.isbns[0] ? isbnArray.push(book.isbns[0].isbn10) : bestSellerNoIsbnInfoArray.push(book) 
            ))} 

          setBestSellerBooks(bestSellingBooks)
          console.log('I AM NO ISBN ARRAY', bestSellerNoIsbnInfoArray)
          {isbnArray.map((isbnNum, idx) => (           

            fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbnNum)
           .then(function (res) {
             return res.json();
           })
           .then(function (result) {        
             result.items ? bestSellerInfoArray.push({
                  id: result.items[0].id,
                  title: result.items[0].volumeInfo.title,
                  authors: result.items[0].volumeInfo.authors,
                  imageLink: result.items[0].volumeInfo.imageLinks.thumbnail,
                  averageRating: result.items[0].volumeInfo.averageRating,
               description: result.items[0].volumeInfo.description
              }) : console.log('pass')

           })           
          
         ))} 

         setBestSellerInfo(bestSellerInfoArray)
        
        }
        
        makeApiCall()       
    
    },[])

      useLayoutEffect(() => {
       console.log('Updated')
      });

  
    return (
        <div>

      <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
    
      <Container fluid style={{ marginTop: '15em' }}>
        <h1>The New York Times Best Sellers of 2020 </h1>
        <Card.Group itemsPerRow={5}>
    { Object.keys(bestSellerInfo).map((item, idx) => (  
               <Card style={{width: '200px'}}>
               <Image src={bestSellerInfo[item].imageLink !== undefined ? bestSellerInfo[item].imageLink : ''} alt={bestSellerInfo[item].title} wrapped ui={false} />
               <Card.Content>
                 <Card.Header>{bestSellerInfo[item].title}</Card.Header>
                 <Card.Meta>
                   <span className='date'>By: {bestSellerInfo[item].authors}</span>
                 </Card.Meta>
                 <Card.Description maxLength="2">
                 {(bestSellerInfo[item].description.length > 200) ? 
                  bestSellerInfo[item].description.substring(0, 200) + '...' : bestSellerInfo[item].description
                  }
                 </Card.Description>
               </Card.Content>
               <Card.Content extra>
               <Link to={"/books/" + bestSellerInfo[item].id }><button class="ui primary button">Details</button></Link>
               </Card.Content>
             </Card>
 

//   <Grid celled='internally' key={idx}>


//   <Grid.Row>
//   <Grid.Column width={3}>
//   <Image src={bestSellerInfo[item].imageLink !== undefined ? bestSellerInfo[item].imageLink : ''} alt={bestSellerInfo[item].title}/>
//   </Grid.Column>
//   <Grid.Column width={13}>

//   <h3>{bestSellerInfo[item].title}</h3>
  
//   <h4>Authors: {bestSellerInfo[item].authors}</h4> 
//   <h4>Avg. Rating: <Rating maxRating={5} defaultRating={bestSellerInfo[item].averageRating ? bestSellerInfo[item].averageRating : 0} icon='star' /></h4>
//    <p>{bestSellerInfo[item].description}...</p>
  
  
//   <Link to={"/books/" + bestSellerInfo[item].id }><button class="ui primary button">Details</button></Link>
//   </Grid.Column>
//   </Grid.Row>
// <Divider section />
// </Grid>


    ))
}  
</Card.Group>
   </Container>
       

      <Container textAlign='center'>
       <PageFooter/>
       </Container>

       </div>
    )
}