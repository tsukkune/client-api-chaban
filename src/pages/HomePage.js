import React, { Component } from 'react';
import List from './../components/list'
import {ProgressBar} from 'react-materialize'

import Search from'./../components/search'

class HomePage extends Component {
  constructor(){
    super()
    this.state={
      receiveData:[],
      from:null,
      to:null
    }
  }

  componentDidMount(){
    if(this.state.from===null && this.state.to===null){
      fetch('http://localhost:1337')
      .then(res=>res.json())
      .then(data=>this.setState({receiveData:data}),data=>{this.setState({receiveData:[]});alert('error')})
      .catch(e=>console.log(e))
    }else if(this.state.from!==null || this.state.to!==null){
      fetch('http://localhost:1337/?from='+`${this.state.from}`+'&to='+`${this.state.to}`)
      .then(res=>res.json())
      .then(data=>this.setState({receiveData:data}),data=>{this.setState({receiveData:[]});alert('error')})
      .catch(e=>console.log(e))
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Fermetures Pont Jacques-Chaban-Delmas</h2>
        <Search/> 
        {!this.state.receiveData.length ? <ProgressBar/>:<List data={this.state.receiveData}/>}
      </div>
    );
  }
}

export default HomePage;
