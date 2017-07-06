import React, { Component } from 'react';
import Donut from './DonutsCart.jsx';

import { createContainer } from 'meteor/react-meteor-data';
import { dbDonuts } from '../api/donuts.js';

class App extends Component {

  addGlazedDonut(){
      dbDonuts.insert({ name: "Glazed Donut" });
  }

  getDonuts(){
    return this.props.donuts;
  }

  renderDonuts(){
    return (
      this.getDonuts().map(function(donut){
        return <li key={donut._id}>{donut.name}</li>
      })
    )
  }

  render() {
    return (
      <div>
        <header>Donut Menu</header>
        <button onClick={this.addGlazedDonut}>Add Glazed Donut</button>
        <ul>
          {this.renderDonuts()}
        </ul>
      </div>
    )
  }

}


export default createContainer(() => {
  return { donuts: dbDonuts.find({}).fetch() };
}, App)
