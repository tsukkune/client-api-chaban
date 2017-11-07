import React from 'react';
import {Button, Card, CardTitle} from 'react-materialize'

export default class SinglePageListItem extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        let date = null
        let startTime = null
        let endTime = null
        let reason = null
        let link = null
        let totale=null 
        const lienOffi="http://sedeplacer.bordeaux-metropole.fr/Toutes-les-infos-circulation/Pont-Chaban-Delmas-Fermetures/"

        if(this.props.data[0].error==='Not found'){
            return(<div className="details">
                <h4>Details</h4>
                <Card>
                    <div >erreur : pas d'evenement</div>
                </Card>
                <Button waves='light' node='a' target="_blank" href={lienOffi}>site officiel</Button>
            </div>)
        }else{
            this.props.data.map(row=>{date=row.date,startTime=row.start,endTime=row.end,reason=row.reason, link=row.link,totale=row.totale})

            return (<div className="details">
                <h4>Details</h4>
                <img src="./../styles/img/sample-1.jpg"/>
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
                <Button waves='light' node='a' target="_blank" href={link}>site officiel</Button>
            </div>)
        }   
    }
}
