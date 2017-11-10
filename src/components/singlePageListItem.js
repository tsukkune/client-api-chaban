import React from 'react';
import {Button, Card} from 'react-materialize'
import Interdit from '../styles/img/interdit.jpg'

export default class SinglePageListItem extends React.Component {

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
                <div class="container">
                    <h1>404 Not found <span>:(</span></h1>
                    <p>Sorry, but the page you were trying to view does not exist.</p>
                    <p>It looks like this was the result of either:</p>
                    <ul>
                        <li>a mistyped address</li>
                        <li>an out-of-date link</li>
                    </ul>
                </div>
                {/*<h4>Details</h4>
                 <Card>
                    <div >erreur : pas d'evenement</div>
                </Card> */}
                <Button waves='light' node='a' target="_blank" href={lienOffi}>site officiel</Button>
            </div>)
        }else{
            this.props.data.map(row=>{date=row.date, startTime=row.start, endTime=row.end, reason=row.reason, link=row.link, totale=row.totale})

            return (<div className="details">
                <h4>Details</h4>
                <div className="carte-interdit">
                    {totale ? <Card>
                        <img alt="fermeture total" src={Interdit}/>
                        <p> Fermeture Totale </p>
                    </ Card>:null}
                </div>
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
