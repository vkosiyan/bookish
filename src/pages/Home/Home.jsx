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
          <Link to="/bestsellers">Browse Best Sellers</Link>
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
              <Grid.Row centered style={{ marginTop: '-4em' }}>
          
              <Image src={require("./SearchLogo.png")} centered/> 
              
              </Grid.Row>
              <Grid.Row centered style={{ marginTop: '-8em' }}>
                  
              <SearchBar setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/>
                  
              </Grid.Row>

                      
          </Grid>
        
         
      </Segment> 
       
      </Segment>

       </>
    )
}