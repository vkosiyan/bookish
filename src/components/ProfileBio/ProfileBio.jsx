import React from 'react';
import {  Image, Grid, Segment, Container } from 'semantic-ui-react';


export default function ProfileBio({user}) { 
  return (
    <Container fluid className="ContainerBody" style={{ marginTop: '-5em' }}>
  <Grid textAlign='center' columns={2}>
    {console.log('Hitting page hello')}
    <Grid.Row>
      <Grid.Column>
        <Image src={`${user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} avatar size='medium' style={{ marginTop: '5em' }} />
      </Grid.Column>
      <Grid.Column textAlign="left">
        <Segment vertical>
           <h3>{user.username}</h3>
        </Segment>
        <Segment>
           <span> Bio: {user.bio}</span>
        </Segment>
          
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  );
}