import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Grid, Image, Rating, Divider } from 'semantic-ui-react'


const bookURL = "https://www.googleapis.com/books/v1/volumes/";

function Book(props){
   const [book, setBook] = useState(null)
   const [bookTitle, setBookTitle] = useState(null)
   const [bookImage, setBookImage] = useState(null)
   const [smallBookImage, setSmallBookImage] = useState(null)
   const [bookAuthors, setBookAuthors] = useState(null)
   const [bookDescription, setBookDescription] = useState(null)
   console.log("I AM BOOK", book)


   // COMPONENTDIDMOUNT..runs only once when Component mounts
  useEffect(() => {
    const bookid = props.match.params.bookid;
    const url = `${bookURL}${bookid}`
    console.log("PROPS", props)
    console.log("BOOK ID ", bookid)


    const makeApiCall = async () => {
      const res  =  await fetch(url)
      const json = await res.json()
      const volumeInfo = json.volumeInfo
      const bookTitle = volumeInfo.title
      const bookImage = volumeInfo.imageLinks.small
      const smallBookImage = volumeInfo.imageLinks.thumbnail
      const bookAuthors = volumeInfo.authors
      const bookDescription = volumeInfo.description
      console.log("IMAGE", bookImage)
      setBook(volumeInfo)
      props.setBook(volumeInfo)
      setBookTitle(bookTitle)
      setBookImage(bookImage)
      setSmallBookImage(smallBookImage)
      setBookAuthors(bookAuthors)
      setBookDescription(bookDescription)


    }
    makeApiCall()
  },[])

    return (
      <div>

        <h1>Title: {bookTitle} </h1>
        <Image src={bookImage !== undefined ? bookImage : smallBookImage} alt='Image Unavailable' />
        <div className="book">Author: {bookAuthors}</div>
        <div className="book">Description: {bookDescription}</div>
        <button onClick={() => props.history.push('/')}>Back</button>
        <Link to='/'>Home</Link>
      </div>
    )
}

export default Book;
