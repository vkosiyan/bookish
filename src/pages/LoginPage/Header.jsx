import { createMedia } from '@artsy/fresnel'
import React from 'react';
import {Link} from 'react-router-dom';

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react'
import BookSearch from '../BookSearch/BookSearch';
import SearchBar from '../SearchBar/SearchBar';



const fixedMenuStyle = {
  backgroundColor: '#A3CACC',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  fontSize:'1.5em'
}


export default function PageHeader({user, handleLogout, setResults, results, setSearchText, searchText}){

    return (
        <div>
            <Menu borderless fixed='top' style={fixedMenuStyle}>
            <Menu.Item header><Link to="/"> <Image size='small' src='/bookishlogo.png' style={{ marginLeft: '5em' }} /></Link></Menu.Item>
            <Menu.Item header><Link to="/">Home</Link></Menu.Item>
              <Menu.Item as='a'>Blog</Menu.Item>
              <Menu.Item as='a'>Articles</Menu.Item>
              <Menu.Item><SearchBar setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/></Menu.Item>
            <Container>   

              <Menu.Menu position='right'>
              <Menu.Item as='a'><Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar size='tiny'></Image> </Link> </Menu.Item>
                <Dropdown text={user.username} pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item><Link to='' onClick={handleLogout}>Logout</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>

        </div>
    )
}
