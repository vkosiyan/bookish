import React, { useState } from "react";  
import axios from 'axios';  
import { Grid, Image, Rating, Divider } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'


function BookSearch({setResults, results, setSearchText, searchText}) {      

    const apiKey = 'AIzaSyB2MR9Aytx1NBrLhcns0k2UAd0RfsemqlE';
    const history = useHistory();


    function handleChange(event) { 
        const searchText = event.target.value; 
        console.log('I AM BOOK', searchText) 
        setSearchText(searchText);
    }  
    function handleSubmit(event) {  
        console.log("I am event", event)
        event.preventDefault();  

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchText + "&key=" + apiKey + "&maxResults=40")  
            .then(data => {  
                console.log('DATA ITEMS', data.data.items);  
                setResults(data.data.items);
                history.push('/search')                  
            }) 
            .then(d => {
                
            }) 
            
    }  
    return (  
        <div>
            {console.log('Hello')}
        <form onSubmit={handleSubmit}>                    
            
            <div className="card">  
                <div className="row">                  
            
                    {results.map((book, idx) => (  

                        <Grid celled='internally' key={idx}>

                            <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.volumeInfo.title}/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                            <h3>{book.volumeInfo.title}</h3>
                            <h4>Authors: {book.volumeInfo.authors}</h4> 
                            <h4>Avg. Rating: <Rating maxRating={5} defaultRating={book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 0} icon='star' /></h4>
                            <p>{book.volumeInfo.description}...</p>
                            
                            

                            <Link to={"/books/" + book.id}><button class="ui primary button">Details</button></Link>
                            </Grid.Column>
                            </Grid.Row>
                            <Divider section />
                        </Grid>
                        
                     
                    ))} 
                </div>  
            </div>  
        </form>  
        </div>
  
    )  
}  
  
export default BookSearch  



