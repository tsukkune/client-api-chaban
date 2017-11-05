import React, { Component } from 'react';
import List from './../components/list'
import {ProgressBar} from 'react-materialize'

class HomePage extends Component {
  constructor(){
    super()
    this.state={
      receiveData:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:1337')
    .then(res=>res.json())
    //.then(data=>console.log('data from api',data))
    .then(data=>this.setState(this.setState({receiveData:data})))
    .catch(e=>console.error(e))
  }

  render() {
    return (
      <div className="App">
        <h2>fermetures</h2>
        {!this.state.receiveData.length ? <ProgressBar/>:<List data={this.state.receiveData}/>}
      </div>
    );
  }
}

export default HomePage;
