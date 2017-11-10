import React from 'react';
import {Button, Card} from 'react-materialize'
import {
    Link,
} from 'react-router-dom'

import Interdit from '../styles/img/interdit.jpg'

export default class ListItem extends React.Component {

    render(){
        const {date, startTime, endTime, totale, reason, id} = this.props

        return (<div>
            <Card title={date}>
                <div className="interdit">
                {totale ?
                    <div>
                    <img alt="fermeture total" src={Interdit}/>
                    <p> Fermeture Totale </p>
                    </div>:null}
                </div>
                <div>{startTime}</div>
                <div>{endTime}</div>
                <div>{reason}</div>
                <Button waves='light'>
                    <Link to={`/${id}`}>plus de details</Link>   
                </Button>
            </Card>
            
        </div>)   
    }
}
