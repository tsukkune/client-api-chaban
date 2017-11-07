import React from 'react';
import {Button, Card} from 'react-materialize'
import {
    Link,
} from 'react-router-dom'

import Interdit from '../styles/img/interdit.jpg'

export default class ListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(document.location.href)
        const {date, startTime, endTime, totale, reason, id} = this.props

        return (<div>
            <Card title={date}>
                <div className="interdit">
                {totale ?
                    <div>
                    <img src={Interdit}/>
                    <p> Fermeture Totale </p>
                    </div>:null}
                </div>
                <div>{startTime}</div>
                <div>{endTime}</div>
                {/* <div>{totalString}</div> */}
                <div>{reason}</div>
                <Button waves='light'>
                    <Link to={`/${id}`}>plus de details</Link>   
                </Button>
            </Card>
            
        </div>)   
    }
}
