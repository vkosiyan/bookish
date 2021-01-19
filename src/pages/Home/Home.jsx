import React, { useState, useEffect } from 'react';

import {  Grid } from 'semantic-ui-react'
import PageHeader from '../../components/Header/Header';
import BookInfo from '../BookInfo/BookInfo';
import BookSearch from '../BookSearch/BookSearch';



export default function Home({user, handleLogout}){  
  
    return (
        
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
          

            <PageHeader user={user} handleLogout={handleLogout}/>
            <BookSearch />

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