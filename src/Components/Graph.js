import React, { Component } from 'react';
import {FaMoneyBill, FaTable, FaTasks, FaQq, FaRegSun, FaCentercode} from 'react-icons/fa';
import { Chart } from 'react-charts';
import {RadialChart} from 'react-vis';

class Graph extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
  <div className="row">
    <div className="col-md-6 col-6 m-auto center">
    
      <FaMoneyBill />
      <h5>Currency Convertor</h5>
    </div>
    <div className="col-md-6 col-6 m-auto center">
      <FaTable />
      <h5>Recent Activity</h5>
    </div>
  </div>
  
  <div className="row">
    <div className="col-xl-6  center">
    <Chart
      data={[
        {
          label: "Series 1",
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: "Series 2",
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ]}
      axes={[
        { primary: true, type: "linear", position: "bottom" },
        { type: "linear", position: "left" }
      ]}
    />
    
      
    </div>
    <div className="col-sm-6 center">
      <RadialChart
      width={300}
      height={200}
      data={[
          {
              angle:1
          },
          {
              angle:5
          },
          {
              angle:2
          }
      ]}
      axes={[
          {
              line:{},
              ticks:{},
              text:{},
              position:"center"

          },
          {
            fontSize:10
          },
          {
              polygons:{
                strokeWidth: 0.5,
    strokeOpacity: 1,
    fillOpacity: 0.1
              }
          }
      ]}
      />
      <h5>Total time spent </h5>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-6 m-auto center">
      <FaTasks />
      <h5>Favourite snips</h5>
    </div>
    <div className="col-md-6 col-6 m-auto center">
      <FaTasks />
      <h5>Favourite clauses</h5>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-6 m-auto center">
      <FaQq />
      <h5>FAQ's</h5>
    </div>
    <div className="col-md-6 col-6 m-auto center">
      <FaRegSun />
      <h5>Prefs</h5>
    </div>
  </div>
  </div>

            </React.Fragment>
        )
    }
}

export default Graph;