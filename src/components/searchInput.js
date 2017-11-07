import React from 'react';

export default class SearchInput extends React.Component {

    render(){
        return (
            <div>
                <h4>{this.props.text} : </h4>
                <input type='date'/>
            </div>
        )   
    }
}
