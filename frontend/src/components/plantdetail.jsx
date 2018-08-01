import React, { Component } from 'react';
import { Jumbotron,  
Container,
 Row,
 Col, } from 'reactstrap'
const API = '/api/plantinfo/';
const DEFAULT_QUERY = 'redux';

 class PlantDetail extends Component {

  render() {

    return(
    <div className="col-3 text-center">
      <h3 className="display-4">Pepper Plant</h3>
      <hr />
      <img style={{opacity: '0.8'}} src={ require('../bud.png') } />
      <hr />
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">2 Days Old</h4>
      </div>
      
      
    </div>
      
    )
    }
}

export default PlantDetail;