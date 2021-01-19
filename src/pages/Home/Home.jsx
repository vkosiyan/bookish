import React, { useState, useEffect } from 'react';

import {  Grid } from 'semantic-ui-react'
import PageHeader from '../../components/Header/Header';
import BookInfo from '../BookInfo/BookInfo';
import BookSearch from '../BookSearch/BookSearch';
import NYTimesInfo from '../NYTimesInfo/NYTimesInfo';


export default function Home({user, handleLogout}){  
    const [bookData, setBookData] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const handleSubmit = (title) => {
      console.log("App - make ApiC all - title", title);
      setBookTitle(title);
      // after our api call we'll set our bookData
    };

    useEffect(() => {
        console.log(bookTitle, " useEffect");
        

        fetch(NYTimesInfo)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setBookData(data);
          });
      }, [bookTitle]);
  
      



    return (
        
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
          <BookSearch />

            <PageHeader user={user} handleLogout={handleLogout}/>
            <NYTimesInfo />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
  
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>

        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}