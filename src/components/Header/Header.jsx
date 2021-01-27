import React from 'react';
import {Link} from 'react-router-dom';
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
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
            <Menu.Item as='a'><Link to="/bestsellers">Browse Best Sellers</Link></Menu.Item>
              <Menu.Item><SearchBar setResults={setResults} results={results} searchText={searchText} setSearchText={setSearchText}/></Menu.Item>
            <Container>   

              <Menu.Menu position='right'>
              <Menu.Item as='a'><Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar size='tiny'></Image> </Link> </Menu.Item>
                <Dropdown text={user.username} pointing className='link item'>
                  <Dropdown.Menu>

                    <Dropdown.Item><Link to='' onClick={handleLogout}>Logout</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>

        </div>
    )
}
