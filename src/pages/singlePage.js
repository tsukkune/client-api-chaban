import React from 'react';
import { Link} from 'react-router-dom'
import {Button,Navbar,NavItem} from 'react-materialize'

export default class SinglePage extends React.Component {
    
    render(){
        const {match}=this.props

        const id = parseInt(match.params.id) 
        
        return (
        <div>
            <div>
                <Navbar class='navbar'>
                    <NavItem waves='light'>
                        <Link to={`/`}>
                            Retour
                        </Link>
                    </NavItem>
                    <NavItem waves='light'>
                        <Link to={`/${id-1}`}>
                            precedant
                        </Link>
                    </NavItem>
                    <NavItem waves='light'>
                        <Link to={`/${id+1}`}>
                            Suivant
                        </Link>
                    </NavItem>
                </Navbar>
            </div>
            <div>
                
            </div>
        </div>)   
    }
}


