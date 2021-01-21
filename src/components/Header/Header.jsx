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

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}



export default function PageHeader({user, handleLogout, setResults, results, book, setBook}){
    const { MediaContextProvider, Media } = createMedia({
        breakpoints: {
          mobile: 0,
          tablet: 768,
          computer: 1024,
        },
      })
      

    return (
        <Segment clearing inverted color='teal' tertiary>
            <Menu
            borderless
            fixed={'top'}
            style={ fixedMenuStyle}
          >
            <Container text>
              <Menu.Item>
              
                  
              </Menu.Item>
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

        </Segment>
    )
}
