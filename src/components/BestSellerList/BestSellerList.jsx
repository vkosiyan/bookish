import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Header, Card, Image, Container } from 'semantic-ui-react'
import PageFooter from '../Footer/Footer';
import PageHeader from '../Header/Header';
import NYTimesInfo from '../NYTimesInfo/NYTimesInfo';



export default function BestSellerList({user, handleLogout, setResults, results, searchText, setSearchText, bestSellerInfo}){  
   
 return (

<div>
        <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} />
      <Container fluid className="ContainerBody" style={{ marginTop: '15em' }}>
      <NYTimesInfo user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} bestSellerInfo={bestSellerInfo} />
      </Container>
      <PageFooter/>
</div>
    

      

)
}