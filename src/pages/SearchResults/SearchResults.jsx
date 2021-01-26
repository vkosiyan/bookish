import React, { useState } from 'react';
import { Container } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import BookSearch from '../../components/BookSearch/BookSearch';

export default function SearchResults({user, handleLogout, setResults, results, searchText, setSearchText}){  
    const [books, setBooks] = useState([])

    return (
        <div>       
   
            <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>

            <Container fluid className="ContainerBody" style={{ marginTop: '15em', paddingLeft: '5em', paddingRight: '5em'}}>
                <BookSearch setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText} />
            </Container>       

            <Container textAlign='center'>
                 <PageFooter />
            </Container>

       </div>
    )
}