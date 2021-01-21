import React, { useState } from "react";  
import axios from 'axios';  
import { Card } from 'react-bootstrap';  
import { Grid, Image, Rating, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function BookSearch({setResults, results, setBook, book}) {  

    

    const apiKey = 'AIzaSyB2MR9Aytx1NBrLhcns0k2UAd0RfsemqlE'

    function handleChange(event) { 
        const book = event.target.value; 
        console.log(book) 
        setBook(book);
    }  
    function handleSubmit(event) {  
        console.log("I am event", event)
        event.preventDefault();  
        this.props.history.push('/');
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")  
            .then(data => {  
                console.log('DATA ITEMS', data.data.items);  
                setResults(data.data.items);                  
            }) 
            .then(d => {
                
            }) 
            
    }  
    return (  

        <form onSubmit={handleSubmit}>  
       
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Search books" type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            {results ? 
            <div className="card">  
                <div className="row">  
                
            
                    {results.map((book, idx) => (  

                        <Grid celled='internally' key={idx}>
                            {console.log('SINGULAR BOOK', book)}
                            <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.volumeInfo.title} />
                            </Grid.Column>
                            <Grid.Column width={10}>
                            <h3>{book.volumeInfo.title}</h3>
                            <h4>Authors: {book.volumeInfo.authors}</h4> 
                            <h4>Avg. Rating: <Rating maxRating={5} defaultRating={book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 0} icon='star' /></h4>
                            <p max="150">{book.volumeInfo.description}...</p>
                            
                            

                            <Link to={"/books/" + book.id}>{book.volumeInfo.title}{book.id}</Link>
                            </Grid.Column>
                            </Grid.Row>
                            <Divider section />
                        </Grid>
                        
                     
                    ))} 
                </div>  
            </div>  : ''}
        </form>  

  
    )  
}  
  
export default BookSearch  



