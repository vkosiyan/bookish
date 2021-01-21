import React, { useState, useEffect } from 'react';
import {  Grid } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import BookInfo from '../BookInfo/BookInfo';
import BookSearch from '../BookSearch/BookSearch';



export default function Home({props, user, handleLogout, setResults, results, book, setBook}){  
  
    return (
        
      <Grid centered >
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 1024 }}>
          

            <PageHeader user={user} handleLogout={handleLogout}/>

          </Grid.Column>
        </Grid.Row>
      
        <Grid.Row style={{ marginTop: '2em' }} width={100}>
        <BookSearch setResults={setResults} results={results} book={book} setBook={setBook}/>
        </Grid.Row>

        <Grid.Row>
        {props ? 
            <BookInfo setResults={setResults} results={results} book={book} setBook={setBook}/> : ''}
        </Grid.Row>


        <PageFooter user={user} handleLogout={handleLogout}/>
      </Grid>
    )
}