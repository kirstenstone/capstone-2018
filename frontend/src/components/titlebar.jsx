import React, { Component } from 'react';
import { Jumbotron,  
Container,
 Row,
 Col, } from 'reactstrap'




class TitleBar extends Component {
  render() {
    return(

      <div>
      <Jumbotron style={{ backgroundColor: '#DAECDA', opacity: '0.6'}}>
      <Container>
          <Row>
          <Col xs="2"><img style={{opacity: '0.2'}} src={ require('../leaf.png') } /></Col>
          

          <Col xs="10">
                  <h1 className="display-3">Smart IoT Growbox</h1>
        <p className="lead text-success">wirelessly monitor your growing environment</p>
        <hr className="my-2" />
          </Col>
          </Row>
        </Container>
      </Jumbotron>

    </div>
    )
    }
}

export default TitleBar;