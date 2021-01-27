import React, {useEffect, useState} from 'react';
import { Container, Image, Card, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PageHeader from '../Header/Header';


function BestSellerListInfo(props) {  
 
    const[bestSellerInfo, setBestSellerInfo] = useState([]);
    const nyTimesApiKey = '.json?api-key=YF4jFW7MyybdTuz3s6uLGAoUcFZqULxg';
    let url = `https://api.nytimes.com/svc/books/v3/lists/${props.match.params.list_name_encoded}${nyTimesApiKey}`
  // const googleApiKey = 'AIzaSyB2MR9Aytx1NBrLhcns0k2UAd0RfsemqlE';    
  //////// API KEYS ////
    const bestSellerNoIsbnInfoArray = [];
    const bestSellerInfoArray = [];
    let isbnArray = [];
    let pageTitle = props.match.params.list_name_encoded.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
        
  useEffect(() => {    

      const makeApiCall = async () => {
        const res  =  await fetch(url)
        const json = await res.json()
        const bestSellingBooks = json.results
        // setBestSellerInfo(bestSellingBooks.books)

{bestSellingBooks.books.map((book, idx) => (    
     

        fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + book.primary_isbn10)
        .then(function (res) {
         return res.json();
       })
        .then(function (result) {        
         result.items ? bestSellerInfoArray.push({
              id: result.items[0].id,
              title: book.title,
              authors: book.author,
              imageLink: book.book_image,
              description: book.description,
              rank: book.rank,
              publisher: book.publisher,
              weeks_on_list: book.weeks_on_list,
              amazon_product_url: book.amazon_product_url
          }) : console.log('pass')
       })         
       
    ))} 
       setBestSellerInfo(bestSellerInfoArray)
       

      }      
      makeApiCall()       
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <div>
        <PageHeader user={props.user} handleLogout={props.handleLogout} setResults={props.setResults} results={props.results} searchText={props.searchText} setSearchText={props.setSearchText} />
      <Container fluid className="ContainerBody" style={{ marginTop: '15em' }}>
      <Header as='h1'>{pageTitle}</Header>
        {/* <Image src={require("./loading.gif")} alt='Loading...' wrapped ui={false}/> */}
        <Card.Group itemsPerRow={4}>
          {bestSellerInfo ? Object.keys(bestSellerInfo).map((item, idx) => (

            <Card style={{ width: '200px' }}>
              <Image src={bestSellerInfo[item].imageLink} alt={bestSellerInfo[item].title} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{bestSellerInfo[item].title}</Card.Header>
                <Card.Meta>
                  <span className='date'>By:
                   {bestSellerInfo[item].authors}  </span>
                </Card.Meta>
                <Card.Meta>
                  Rank #{bestSellerInfo[item].rank} and has been on the list for {bestSellerInfo[item].weeks_on_list} weeks
                </Card.Meta>
                <Card.Description>
                  {bestSellerInfo[item].description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to={"/books/" + bestSellerInfo[item].id}><button class="ui primary button">Details</button></Link>
              </Card.Content>
            </Card>
           

          ))
          : console.log('No info yet')}
        </Card.Group>
      </Container>

    </div>


  );
}

export default BestSellerListInfo;
