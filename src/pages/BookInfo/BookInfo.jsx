import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const bookURL = "https://www.googleapis.com/books/v1/volumes/";

function Book({book}){
   console.log("I AM BOOK", book)

   // COMPONENTDIDMOUNT..runs only once when Component mounts
  useEffect(() => {
    // const bookid = props.match.params.bookid;
    // const url = `${bookURL}.json`
    // console.log('BOOK ID', bookid)
    // console.log('UR:' + url)
    // const makeApiCall = async () => {
    //   const res  =  await fetch(url)
    //   const json = await res.json()
    //   let bookID = json.items;

    // }
    // makeApiCall()
  },[])

    return (
      <div>
        <h1>Title: </h1>
        {/* <div className="book">Author: </div>
        <button onClick={() => props.history.push('/')}>Back</button> */}
        <Link to='/'>Home</Link>
      </div>
    )
}

export default Book;
