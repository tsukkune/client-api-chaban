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
    this.handleSetInfo = this.handleSetInfo.bind(this)
  }

  handleSetInfo=(value1,value2)=>{
    this.setState({
      receiveData:[]
    })
    console.log('from: '+this.state.from+" value1: "+value1)
    fetch('http://localhost:1337/?from='+value1+'&to='+value2)
    .then(res=>res.json())
    .then(data=>this.setState({receiveData:data}),data=>{this.setState({receiveData:[]});alert('erreur api non disponible')})
    .catch(e=>console.log(e))
  }  

  componentDidMount(){
      console.log("AZERTYUI")
      fetch('http://localhost:1337')
      .then(res=>res.json())
      .then(data=>this.setState({receiveData:data}),data=>{this.setState({receiveData:[]});alert('erreur api non disponible')})
      .catch(e=>console.log(e))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h2>Fermetures Pont Jacques-Chaban-Delmas</h2>
        <Search callback={this.handleSetInfo}/> 
        {!this.state.receiveData.length ? <ProgressBar/>:<List data={this.state.receiveData}/>}
      </div>
    );
  }
}

export default HomePage;
