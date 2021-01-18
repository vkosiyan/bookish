import { createMedia } from '@artsy/fresnel'
import React from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'


export default function PageHeader({user, handleLogout}){
    const { MediaContextProvider, Media } = createMedia({
        breakpoints: {
          mobile: 0,
          tablet: 768,
          computer: 1024,
        },
      })
    return (
        <Segment clearing>
            
            <Header as='h2' floated='right'>
                <Link to="/"><Icon name="home"></Icon></Link>
                {user.email}
                <Link to='' onClick={handleLogout}>Logout</Link>
            </Header>
            <Header as='h2' floated='left'>
                <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
            </Header>
        </Segment>
    )
}