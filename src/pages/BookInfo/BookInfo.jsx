import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Grid, Image, Rating, Divider, Container, Header, Button } from 'semantic-ui-react'
import PageFooter from "../../components/Footer/Footer";
import PageHeader from "../../components/Header/Header";
import * as bookService from '../../utils/bookService';


const bookURL = "https://www.googleapis.com/books/v1/volumes/";

function Book(props){
  

   const [book, setCurrentBook] = useState('')
   const [bookId, setCurrentBookId] = useState(null)
   const [bookTitle, setCurrentBookTitle] = useState(null)
   const [bookImage, setCurrentBookImage] = useState(null)
   const [smallBookImage, setSmallBookImage] = useState(null)
   const [bookAuthors, setCurrentBookAuthors] = useState(null)
   const [bookDescription, setCurrentBookDescription] = useState(null)
     
    const [books, setBooks] = useState([])
    const [error, setError ] = useState('')
    const [state, setState] = useState({
    id: props.match.params.bookid,
  })
  



  async function handleSubmit(e){
    e.preventDefault()
            
    try {
          await bookService.create(state);
        // Route to wherever you want!
        props.handleAddBook() // 
        
      } catch (err) {
        // Invalid user data (probably duplicate email)
        setError(err.message)
      }
  }


   // COMPONENTDIDMOUNT..runs only once when Component mounts
  useEffect(() => {
    const bookid = props.match.params.bookid;
    const url = `${bookURL}${bookid}`
    
    console.log("Props", props)


    const makeApiCall = async () => {
      const res  =  await fetch(url)
      const json = await res.json()
      const volumeInfo = json.volumeInfo
      const bookId = bookid
      const bookTitle = volumeInfo.title
      const bookImage = volumeInfo.imageLinks.small
      const smallBookImage = volumeInfo.imageLinks.thumbnail
      const bookAuthors = volumeInfo.authors
      const bookDescription = volumeInfo.description
      setCurrentBook(volumeInfo)
      props.setCurrentBook(volumeInfo)
      setCurrentBookId(bookId)
      setCurrentBookTitle(bookTitle)
      setCurrentBookImage(bookImage)
      setSmallBookImage(smallBookImage)
      setCurrentBookAuthors(bookAuthors)
      setCurrentBookDescription(bookDescription)

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
            <Header as='h1'>Title: {bookTitle} </Header>
      
        <div className="book">Author: {bookAuthors}</div>
        <div className="book">Description: {bookDescription}</div>
        <button onClick={() => props.history.push('/')}>Back</button>
        <Link to='/'>Home</Link>
        <button class="ui button" onClick={handleSubmit} >Add to Favorites</button>
      </Grid.Column>
    </Grid.Row>
    </Grid>
      
   
    <PageFooter/>
      </div>
    )
}

export default Book;
