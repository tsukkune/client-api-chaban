import React from 'react';
import {Button, Card} from 'react-materialize'
import {
    Link,
} from 'react-router-dom'

export default class ListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {date, startTime, endTime, totale, reason, id} = this.props
        let totalString=''
        if(totale===true){
            totalString='true'
        }else{
            totalString='false'
        }

        return (<div>
            <Card title={date}>
                <div>{startTime}</div>
                <div>{endTime}</div>
                <div>{totalString}</div>
                <div>{reason}</div>
                <Button waves='light'>
                    <Link to={`/${id}`}>plus de details</Link>   
                </Button>
            </Card>
            
        </div>)   
    }
}
