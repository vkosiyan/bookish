import React, { useLayoutEffect } from 'react';
import { Container, Image, Card, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


function NYTimesInfo({ bestSellerInfo }) {  

  useLayoutEffect(() => {

  }, {})

  return (
    <div>
      <Container fluid className="ContainerBody" style={{ marginTop: '15em' }}>
      <Header as='h1'>The New York Times Best Sellers of 2020</Header>
        <Card.Group itemsPerRow={4}>
          {Object.keys(bestSellerInfo).map((item, idx) => (
            <Card style={{ width: '200px' }}>
              <Image src={bestSellerInfo[item].imageLink !== undefined ? bestSellerInfo[item].imageLink : ''} alt={bestSellerInfo[item].title} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{bestSellerInfo[item].title}</Card.Header>
                <Card.Meta>
                  <span className='date'>By:
                   {bestSellerInfo[item].authors.length < 2 ? ' ' + bestSellerInfo[item].authors : ' ' + [bestSellerInfo[item].authors[0] +
                      Object.keys(bestSellerInfo[item].authors).slice(1).map((author, idx) => (
                        ', ' + bestSellerInfo[item].authors[author]
                      ))]
                    }  </span>
                </Card.Meta>
                <Card.Description>
                  {(bestSellerInfo[item].description.length > 100) ?
                    bestSellerInfo[item].description.substring(0, 100) + '...' : bestSellerInfo[item].description
                  }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to={"/books/" + bestSellerInfo[item].id}><button class="ui primary button">Details</button></Link>
              </Card.Content>
            </Card>

          ))
          }
        </Card.Group>
      </Container>

    </div>


  );
}

export default NYTimesInfo;
