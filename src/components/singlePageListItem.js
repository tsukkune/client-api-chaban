import React from 'react';
import {Button, Card} from 'react-materialize'
import {
    Link,
} from 'react-router-dom'

export default class SinglePageListItem extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        let date = null
        let startTime = null
        let endTime = null
        let reason = null
        let id = null
        let link = null
        
        this.props.data.map(row=>{date=row.date,startTime=row.start,endTime=row.end,reason=row.reason, link=row.link})
        
        return (<div className="details">>
            <h4>Details</h4>
            <Card>
                <div >Date : {date}</div>
            </Card>
            <Card>
                <div>Debut : {startTime}</div>
                <div>Fin : {endTime}</div>
            </Card>
            <Card>
                <div>raison : {reason}</div>
            </Card>
            <Button waves='light' node='a' href={link}>site officiel</Button>
        </div>)   
    }
}
