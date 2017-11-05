import React from 'react';
import ListItem from './listItem'

export default class List extends React.Component {
    constructor(props){
        super(props)
        console.log('props : ',props)
    }

    render(){
        return (<div>
            {this.props.data.map(row=><ListItem date={row.date} startTime={row.start} endTime={row.end} totale={row.totale} reason={row.reason} key={row.date} id={row.id}/>)}            
        </div>)   
    }
}
