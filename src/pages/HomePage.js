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

  handleSetInfo=(from,to)=>{
    let regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    if(regex.test(from) && regex.test(to)){
      let date1 = from.split("-")
      let date2 = to.split("-")
      if(new Date(date1[2]+"/"+date1[1]+"/"+date1[0]).getTime() > new Date(date2[2]+"/"+date2[1]+"/"+date2[0]).getTime()){
        alert('from superieur a to')
      }else{
        this.setState({
          receiveData:[]
        })
        fetch('http://localhost:1337/?from='+from+'&to='+to)
        .then(res=>res.json())
        .then(data=>this.setState({receiveData:data}),data=>{this.setState({receiveData:[]});alert('erreur api non disponible')})
        .catch(e=>console.log(e))
      }
    }
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
