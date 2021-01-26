import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Grid, Image, Rating, Divider, Container, Header, Button, Segment } from 'semantic-ui-react'
import AddToFavorites from "../../components/AddToFavorites/AddToFavorites";
import PageFooter from "../../components/Footer/Footer";
import PageHeader from "../../components/Header/Header";

const bookURL = "https://www.googleapis.com/books/v1/volumes/";

function Book(props){  
  const [bookComments, setBookComments] = useState([])
   const [bookImage, setCurrentBookImage] = useState(null)
   const [smallBookImage, setSmallBookImage] = useState(null)
   const [bookAuthors, setCurrentBookAuthors] = useState(null)
   const [bookDescription, setCurrentBookDescription] = useState(null)
   const [bookId, setBookId] = useState(null)
   const [bookRating, setBookRating] = useState(null)

  useEffect(() => {
    const bookid = props.match.params.bookid;
    const url = `${bookURL}${bookid}`
    
    

    const makeApiCall = async () => {
      const res  =  await fetch(url)
      const json = await res.json()
      const volumeInfo = json.volumeInfo

      const bookImage = volumeInfo.imageLinks.small
      const smallBookImage = volumeInfo.imageLinks.thumbnail
      let bookAuthors = '';
      const bookDescription = volumeInfo.description
      const bookRating = volumeInfo.averageRating
      props.setCurrentBook(volumeInfo)
      setCurrentBookImage(bookImage)
      setSmallBookImage(smallBookImage)
      
      setCurrentBookDescription(bookDescription)
      setBookId(bookid)
      setBookRating(bookRating)
      console.log('VOLUME INFO',volumeInfo)

    // console.log('TYPE OF', volumeInfo.authors.length)
    volumeInfo.authors < 2 ? 
    bookAuthors = ' ' + volumeInfo.authors : 
    bookAuthors = ' ' + [volumeInfo.authors[0] +                     
                   Object.keys(volumeInfo.authors).slice(1).map((author, idx) => (  
                     ', ' + volumeInfo.authors[author]
                     ))]
                     setCurrentBookAuthors(bookAuthors)               
    }
    makeApiCall()
    

  },[])

    return (
      <div>

    <PageHeader user={props.user} handleLogout={props.handleLogout} setResults={props.setResults} results={props.results} searchText={props.searchText} setSearchText={props.setSearchText} />

    <Grid celled style={{ marginTop: '15em' }}> 
    <Grid.Row>

      <Grid.Column>
      <Image src={bookImage !== undefined ? bookImage : smallBookImage} floated='left' size='medium' style={{ margin: '2em 2em 2em 2em' }} alt='Image Unavailable'/>
      <Header as='h1'>Title: {props.currentBook.title} </Header>
      
        <h2 style={{ marginTop: '-.5em' }}>By {bookAuthors}</h2>

        <Rating maxRating={5} defaultRating={bookRating ? bookRating : 0} icon='star' />
        {bookRating}
        <div className="book" style={{ marginTop: '1em' }}>{bookDescription}</div>
        <Grid.Row style={{ marginTop: '8em' }}>
         <button onClick={() => props.history.push('/')} class="ui primary button">Back</button>
        <Link to='/'> <button onClick={() => props.history.push('/')} class="ui primary button">Home</button></Link>
    </Grid.Row>

      </Grid.Column>
    </Grid.Row>

    </Grid>      
   
    <PageFooter/>
      </div>
    )
}

export default Book;
