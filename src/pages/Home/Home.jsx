import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Segment, Container, Grid, Divider, Rating, Image, Card } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import axios from 'axios';  
import { Link, useHistory } from 'react-router-dom'
import NYTimesInfo from '../../components/NYTimesInfo/NYTimesInfo';



export default function Home({user, handleLogout, setResults, results, searchText, setSearchText, bestSellerInfo}){  
   
  
    return (
        <div>

      <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
      <NYTimesInfo bestSellerInfo={bestSellerInfo}/>
     
       

    
       <PageFooter/>
      

       </div>
    )
}