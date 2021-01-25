import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid, Divider } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import axios from 'axios';  
import { Link, useHistory } from 'react-router-dom'



export default function Home({user, handleLogout, setResults, results, searchText, setSearchText, bestSellerBooks, setBestSellerBooks, bestSellerInfo, setBestSellerInfo}){  
    const listURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/2020.json?api-key=";
    const nyTimesApiKey = 'YF4jFW7MyybdTuz3s6uLGAoUcFZqULxg';
    let bestSellerNoIsbnInfoArray = [];
    let bestSellerInfoArray = [];

    const googleApiKey = 'AIzaSyB2MR9Aytx1NBrLhcns0k2UAd0RfsemqlE';               
            
                    // {results.map((book, idx) => (  

                   
                    //             <Image src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.volumeInfo.title}/>
                      
                    //         <h3>{book.volumeInfo.title}</h3>
                    //         <h4>Authors: {book.volumeInfo.authors}</h4> 
                    //         <h4>Avg. Rating: <Rating maxRating={5} defaultRating={book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 0} icon='star' /></h4>
                    //         <p>{book.volumeInfo.description}...</p>



    useEffect(() => {

        const url = `${listURL}${nyTimesApiKey}`
        let isbnArray = [];


        
    
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
          //     fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnNum + "&key=" + googleApiKey, 
          //     {    method: 'get'  })  
          //   .then(response => { return response.json(); })  .then(data => {    
          //     var img = data.items[0].volumeInfo.imageLinks.thumbnail;
          //     var bestSellerId = data.items[0].volumeInfo.imageLinks.thumbnail;    
          //   img = img.replace(/^http:\/\//i, 'https://');    $('#cover-' + id).attr('src', img);  })    .catch(error=> {       console.log(error);  
          // });
// ------
            // axios.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbnNum + "&key=" + googleApiKey)  
            // .then(data => {  
            //     // console.log('DATA ITEMS', data.data);  
            //       super();
            //       data.data.items ? this.state = {
            //         id: data.data.items[0].id,
            //         imageLink: data.data.items[0].imageLinks.thumbnail
            //       } : console.log('pass')
    
                
            // }) 
            // .then(d => {
            //   // console.log('I AM ARRAY', bestSellerInfoArray)
            //   // setBestSellerInfo(bestSellerInfoArray)
            //   function(){
            //     this.props.addItem(this.state)
            //       }
            // }) 
            // --------
            fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbnNum)
           .then(function (res) {
             return res.json();
           })
           .then(function (result) {
             // items = result.items;
        
             result.items ? bestSellerInfoArray.push(result.items[0]) : console.log('pass')
            //  console.log('I AM MEASURED RESULTS', result.items[0]);
           
             
            //  {bestSellerInfoArray.map((book, idx) => (
            //     console.log(book)
            //   ))} 
           })

          
         ))} 
         
         console.log('I AM ARRAY', bestSellerInfoArray)

        }
        makeApiCall()   
     

    
      },[])

  
    return (
        <div>
   
      {console.log('I AM ARRAY', bestSellerInfo)}
        <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
     
        <Container text style={{ marginTop: '7em' }}>

        </Container>
        {/* {bestSellerInfoArray.map((book, idx) => (
                console.log('I AM BOOK', book)
              ))}  */}

        {bestSellerBooks.map((book, idx) => (  
         
        <Grid celled='internally' key={idx}>
              {bestSellerInfoArray.map((googleBook, idx) => (
                Object.keys(googleBook).forEach(function(key) {
                  if (googleBook[key] == book.isbns[0].isbn10) {
                    console.log(book.author)
                  } else {
                    console.log(googleBook[key])
                  }})
              ))} 
 {/* {console.log(book)} */}
            <Grid.Row>
            <Grid.Column width={3}>
                
            </Grid.Column>
            <Grid.Column width={13}>
            <h3>Title: {book.title}</h3>
            <h4>Authors: {book.author}</h4> 
            {/* {console.log('I AM ISBN', book.isbns.isbn13)} */}
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