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
import BookSearch from '../../pages/BookSearch/BookSearch';


const fixedMenuStyle = {
  backgroundColor: '#A3CACC',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
}


export default function PageHeader({user, handleLogout, setResults, results, book, setBook}){

    return (
        <div>
            <Menu borderless fixed='top' style={fixedMenuStyle}>
            <Container>
              <Menu.Item header><Link to="/">Home</Link></Menu.Item>
              <Menu.Item as='a'>Blog</Menu.Item>
              <Menu.Item as='a'>Articles</Menu.Item>
              

              <Menu.Menu position='right'>
              <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image> </Link> 
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
