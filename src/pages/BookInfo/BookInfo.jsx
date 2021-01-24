import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Grid, Image, Rating, Divider, Container, Header, Button } from 'semantic-ui-react'
import AddToFavorites from "../../components/AddToFavorites/AddToFavorites";
import PageFooter from "../../components/Footer/Footer";
import PageHeader from "../../components/Header/Header";
import * as bookService from '../../utils/bookService';


const bookURL = "https://www.googleapis.com/books/v1/volumes/";

function Book(props){  
   const [bookImage, setCurrentBookImage] = useState(null)
   const [smallBookImage, setSmallBookImage] = useState(null)
   const [bookAuthors, setCurrentBookAuthors] = useState(null)
   const [bookDescription, setCurrentBookDescription] = useState(null)
   const [bookId, setBookId] = useState(null)
   
   const [error, setError ] = useState('')
   const [state, setState] = useState({
     id: props.match.params.bookid,
    })
function handleSubmit(e){
    e.preventDefault()
    
    bookService.create(state);
        // Route to wherever you want!
        // props.handleAddBook() // 
    }


   // COMPONENTDIDMOUNT..runs only once when Component mounts
  useEffect(() => {
    const bookid = props.match.params.bookid;
    const url = `${bookURL}${bookid}`
    
    

    const makeApiCall = async () => {
      const res  =  await fetch(url)
      const json = await res.json()
      const volumeInfo = json.volumeInfo

      const bookImage = volumeInfo.imageLinks.small
      const smallBookImage = volumeInfo.imageLinks.thumbnail
      const bookAuthors = volumeInfo.authors
      const bookDescription = volumeInfo.description
      props.setCurrentBook(volumeInfo)
      setCurrentBookImage(bookImage)
      setSmallBookImage(smallBookImage)
      setCurrentBookAuthors(bookAuthors)
      setCurrentBookDescription(bookDescription)
      setBookId(bookid)

    }
    makeApiCall()
    

  },[])

    return (
      <div>
    <PageHeader user={props.user} handleLogout={props.handleLogout} setResults={props.setResults} results={props.results} searchText={props.searchText} setSearchText={props.setSearchText} />
     
    <Grid celled style={{ marginTop: '15em' }}> 
    <Grid.Row>

      <Grid.Column>
      <Image src={bookImage !== undefined ? bookImage : smallBookImage} floated='left'
    size='medium' style={{ margin: '2em 2em 2em 2em' }} alt='Image Unavailable'/>
            <Header as='h1'>Title: {props.currentBook.title} </Header>
      
        <div className="book">Author: {bookAuthors}</div>
        <div className="book">Description: {bookDescription}</div>
        <button onClick={() => props.history.push('/')}>Back</button>
        <Link to='/'>Home</Link>
        <AddToFavorites currentBook={props.currentBook} bookId={bookId} bookImage={bookImage}/>
        {/* <button class="ui button" onClick={handleSubmit} >Add to Favorites</button> */}
      </Grid.Column>
    </Grid.Row>
    </Grid>
      
   
    <PageFooter/>
      </div>
    )
}

export default Book;
