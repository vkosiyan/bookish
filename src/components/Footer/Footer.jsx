import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'


export default function PageFooter(){      

    return (
        <div>
           <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em', backgroundColor: '#A6A6A6', marginTop: 0}}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='APIs Used' />
            <List link inverted>
              <List.Item as='a' a href='https://developer.nytimes.com/docs/books-product/1/overview' target="_blank">NY Times Books API</List.Item>
              <List.Item as='a' a href='https://developers.google.com/books' target="_blank">Google Books API</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='More Info' />
            <List link inverted>
              <List.Item as='a' a href="mailto: vkosiyan@gmail.com" target="_blank">Contact</List.Item>
              <List.Item as='a' a href='https://github.com/vkosiyan/bookish' target="_blank">Project Page</List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image src={require("./footerlogo.png")} size='small' centered/> 
        <List horizontal inverted divided link size='small'>
          <List.Item>
          © 2021 Bookish, Inc
          </List.Item>
        </List>
      </Container>
    </Segment>
        </div>
    )
}