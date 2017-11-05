import React from 'react';
import {Link} from 'react-router-dom'
import {ProgressBar,Navbar,NavItem} from 'react-materialize'

import List from './../components/list'


export default class SinglePage extends React.Component {
    
    constructor(){
        super()
        this.state={
            receiveData:[]
        }
    }

    componentDidMount(){
        const {match}=this.props
        const id = parseInt(match.params.id) 
            
        fetch('http://localhost:1337/'+`${id}`)
        .then(res=>res.json())
        .then(data=>{const tab=[data]
        return tab})
        .then(data=>this.setState(this.setState({receiveData:data})))
        .catch(e=>console.error(e))
    }

    render(){
        const {match}=this.props
        const id = parseInt(match.params.id) 

        console.log('data',this.state.receiveData)
      
        return (
        <div>
            <div>
                <Navbar className='navbar'>
                    <NavItem waves='light'>
                        <Link to={`/`}>
                            Retour
                        </Link>
                    </NavItem>
                    {/* <NavItem waves='light'>
                        <Link to={`/${id-1}`}>
                            precedant
                        </Link>
                    </NavItem>
                    <NavItem waves='light'>
                        <Link to={`/${id+1}`}>
                            Suivant
                        </Link>
                    </NavItem> */}
                </Navbar>
            </div>
            <div>
                {this.state.receiveData.length ===0 ? <ProgressBar/>:<List data={this.state.receiveData}/>}
            </div>
        </div>)   
    }
}


