import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Header, Card, Image, Container } from 'semantic-ui-react'
import PageFooter from '../../components/Footer/Footer';
import PageHeader from '../../components/Header/Header';
import NYTimesInfo from '../../components/NYTimesInfo/NYTimesInfo';



export default function BestSellers({user, handleLogout, setResults, results, searchText, setSearchText, bestSellerInfo, setListName}){  
    const listNamesURL = "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=";
    const nyTimesApiKey = 'YF4jFW7MyybdTuz3s6uLGAoUcFZqULxg';

    //////// API KEYS ////
  
    const [listInformation, setListInformation] = useState([]);  
    let listInfoArray = [];
    useEffect(() => {
        const url = `${listNamesURL}${nyTimesApiKey}`   
  
        const makeApiCall = async () => {
          const res  =  await fetch(url)
          const json = await res.json()
          const bestSellingLists = json.results
          
          setListInformation(bestSellingLists)

        }
        
        makeApiCall()       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    return (
        <div>
           
      <PageHeader user={user} handleLogout={handleLogout} setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
      <Container fluid className="ContainerBody" style={{ marginTop: '15em' }}>
      <Header as='h1'>The New York Times Lists of Best Sellers</Header>
      <Card.Group centered>
            {listInformation.map((list, idx) => (            

                <Card>
                <Card.Content>
                    <Card.Header><Image src={require("./bookpng.png")} size='mini'/> <Link to={"/listinfo/" + list.list_name_encoded} value={list.list_name_encoded}>{list.list_name}</Link></Card.Header>
                    <Card.Meta>Updated {list.updated.toLowerCase()}</Card.Meta>
                    <Card.Description>
                    Oldest published date: {list.oldest_published_date} | Newest Published Date: {list.newest_published_date}
                    </Card.Description>
                </Card.Content>
                </Card>          
                            
            ))          
            }
        </Card.Group>

            </Container>
       

    
       <PageFooter/>
      

       </div>
    )
}