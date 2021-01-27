import React from 'react';
import { Segment, Image, Grid, Menu, Dropdown } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';



export default function Home({user, handleLogout, setResults, results, searchText, setSearchText, bestSellerInfo}){  
  
    return (
      <>

    <Segment>
    <Menu pointing>
        <Menu.Item
          active='true'          
          name='search'
          header
        >
          Search
        </Menu.Item>
        <Menu.Item
          name='bestsellers'
        >
          <Link to="/bestsellerslist">Browse Best Sellers</Link>
        </Menu.Item>
        <Menu.Item
          name='profile'
          position='right'
        >
          <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar size='mini'></Image></Link>
        </Menu.Item>
        <Dropdown text={user.username} pointing className='link item'>
                  <Dropdown.Menu>

                    <Dropdown.Item><Link to='' onClick={handleLogout}>Logout</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
      </Menu>   

        <Segment raised className='Search'>        

          <Grid centered>
              <Grid.Row centered style={{ marginTop: '-8em' }}>
          
              <Image src="https://i.ibb.co/VVdZzQ0/Search-Bar-set-Results-set-Results-results-results-search-Text-search-Text-set-Search-Text-set-Searc.png" height="275px" centered/> 
              
              </Grid.Row>
              <Grid.Row centered style={{ marginTop: '-5em' }}>
                  
              <SearchBar setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
                  
              </Grid.Row>

                      
          </Grid>
        
         
      </Segment> 
       
      </Segment>

       </>
    )
}