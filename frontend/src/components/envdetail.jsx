import React, { Component } from 'react';
import { Jumbotron,  
Container,
 Row,
 Col, } from 'reactstrap'


 class EnvDetail extends Component {
  render() {
    return(
      <div className="col-5 text-center">
        <div class="alert alert-warning" role="alert">
          <div class="col">            
            Light Status
            <h4 class="alert-heading">ON</h4>
          </div>
        </div>
        <div class="alert alert-primary" role="alert">
          <br/>
          <br/>
          <br/>

          <br/>
        </div>
        <div class="alert alert-primary" role="alert">
        </div>
      </div>

      
    )
  }
}

export default EnvDetail;