import React from 'react';

export default class SearchInput extends React.Component {
    constructor(props){
        super(props)
    }

    handleChange = (e)=>{
        let contenu=e.target.value
        this.props.callback(this.props.text,contenu)
        console.log('contenu input',this.props.text,contenu)
    }

    render(){
        return (
            <div>
                <h4>{this.props.text} : </h4>
                <input onChange={this.handleChange}/>
            </div>
        )   
    }
}
