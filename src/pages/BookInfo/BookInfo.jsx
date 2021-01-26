import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Grid, Image, Container, Header} from 'semantic-ui-react'
import PageFooter from "../../components/Footer/Footer";
import PageHeader from "../../components/Header/Header";
import './BookInfo.css';
const bookURL = "https://www.googleapis.com/books/v1/volumes/";

function Book(props){  
  const [bookComments, setBookComments] = useState([])
   const [bookImage, setCurrentBookImage] = useState(null)
   const [smallBookImage, setSmallBookImage] = useState(null)
   const [bookAuthors, setCurrentBookAuthors] = useState(null)
   const [bookDescription, setCurrentBookDescription] = useState(null)
   const [bookId, setBookId] = useState(null)
   const [bookRating, setBookRating] = useState(null)
   const [volumeInfo, setVolumeInfo] = useState(null)
   const [bookCategories, setBookCategories] = useState(null)


  useEffect(() => {
    const bookid = props.match.params.bookid;
    const url = `${bookURL}${bookid}`
    
    

    const makeApiCall = async () => {
      const res  =  await fetch(url)
      const json = await res.json()
      const volumeInfo = json.volumeInfo

      const bookImage = volumeInfo.imageLinks.small
      const smallBookImage = volumeInfo.imageLinks.thumbnail
      let bookAuthors = ''
      let bookCategories = ''
      const bookDescription = volumeInfo.description
      const cleanBookDescription = bookDescription.replace(/<[^>]+>/g, '')
      const bookRating = volumeInfo.averageRating
      props.setCurrentBook(volumeInfo)
      setCurrentBookImage(bookImage)
      setSmallBookImage(smallBookImage)
      
      setCurrentBookDescription(cleanBookDescription)
      setBookId(bookid)
      setBookRating(bookRating)
      setVolumeInfo(volumeInfo)
      console.log('VOLUME INFO',volumeInfo)

    if(!volumeInfo.authors){
      bookAuthors = <i>Author Unlisted</i>
    } else if(volumeInfo.authors < 2){
      bookAuthors = ' ' + volumeInfo.authors
    } else {bookAuthors = ' ' + [volumeInfo.authors[0] +                     
    Object.keys(volumeInfo.authors).slice(1).map((author, idx) => (  
      ', ' + volumeInfo.authors[author]
      ))] }

     setCurrentBookAuthors(bookAuthors)
     
     if(!volumeInfo.categories){
      bookCategories = <i>Category Unlisted</i>
    } else if(volumeInfo.categories < 2){
      bookCategories = ' ' + volumeInfo.categories
    } else {bookCategories = ' ' + [volumeInfo.categories[0] +                     
    Object.keys(volumeInfo.categories).slice(1).map((category, idx) => (  
      ' ' + volumeInfo.categories[category]
      ))] }

      setBookCategories(bookCategories)
     
    }
    makeApiCall()
    

  },[])
  

    return (
      <div>

    <PageHeader user={props.user} handleLogout={props.handleLogout} setResults={props.setResults} results={props.results} searchText={props.searchText} setSearchText={props.setSearchText} />
    <Container fluid className="ContainerBody" style={{ marginTop: '15em' }}>
    <Grid celled> 
    <Grid.Row>

      <Grid.Column>
      <Image src={bookImage !== undefined ? bookImage : smallBookImage} floated='left' size='medium' style={{ margin: '2em 2em 2em 2em' }} alt='Image Unavailable'/>
      <Container textAlign='justified'>
      <Header as='h2'>Title: {props.currentBook.title} </Header>
      
        <h3 style={{ marginTop: '-.5em', color: 'grey' }}>By {bookAuthors}</h3>
        <h4 style={{ marginTop: '-.5em', color: 'grey' }}>{bookCategories}</h4>
        <h3 style={{ marginTop: '-.5em'}}> Average Rating: {bookRating}</h3>
      
       
        <div className="book" style={{ marginTop: '1em' }}>{bookDescription}</div>
        </Container>
        <Grid.Row style={{ marginTop: '8em' }}>
         <button onClick={() => props.history.push('/')} class="ui primary button">Back</button>
        <Link to='/'> <button onClick={() => props.history.push('/')} class="ui primary button">Home</button></Link>
    </Grid.Row>

      </Grid.Column>
    </Grid.Row>

    </Grid>      
   </Container>

    <PageFooter/>
      </div>
    )
}

export default Book;
