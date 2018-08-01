import React, { Component } from 'react';
import {connect} from 'react-redux';
import { plantinfo } from "../actions";
import TitleBar from './titlebar.jsx';
import PlantDetail from './plantdetail.jsx';
import EnvDetail from './envdetail.jsx';

import { Button,
 Container,
 Row,
 Col,
 Jumbotron
    } from 'reactstrap'


class PlantInfo extends Component {


  render() {
    return (
      <div>
        <div>
        <TitleBar />
        </div>
        <hr />
        <div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <PlantDetail />
            <div className="col-9 text-center">

                <h2>Environment Information</h2>         
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Time of Reading</th>
                      <th>Light Cycle</th>
                      <th>Growth Stage</th>
                      <th>Door Status</th>
                      <th>Temperature</th>
                      <th>Humidity</th>   
                      <th>Soil Status</th>
                      <th>CO2 (ppm) </th>
                      <th>Resevoir</th>      
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.plantinfo.map((plantinfo, id) => (
                      <tr key={`plantinfo_${-id}`}>
                        <td>{plantinfo.time_created}</td>
                        <td>{plantinfo.light_status}</td>
                        <td>{plantinfo.growth_stage}</td>
                        <td>{plantinfo.door_status}</td>
                        <td>{plantinfo.air_temp}</td>
                        <td>{plantinfo.air_humidity}</td>
                        <td>{plantinfo.soil_moisture}</td>
                        <td>{plantinfo.co2_ppm}</td>                        <td>{plantinfo.water_level}</td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


        <div>

        </div>
      <div>



      </div>

      </div>

  )
  }
  state = {
    water_level: "",
    co2_ppm: "",
    soil_moisture: "",
    air_temp: "",
    air_humidity: "",
    door_status: "",
    growth_stage: "",
    light_status: "",
    time_created:"",
  }

      componentDidMount() {
        this.props.fetchData();
  }
}


const mapStateToProps = state => {
  return {
    plantinfo: state.plantinfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
        dispatch(plantinfo.fetchData());
      },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlantInfo);
