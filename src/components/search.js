import React from 'react';
import SearchInput from './searchInput'
import {Button} from 'react-materialize'

export default class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            startDate:null,
            endDate:null
        }
    }

    handleChangeInput = (text,date)=>{
        if (text==='to'){
            this.setState({
                endDate:date 
            })
        }
        else if (text==='from'){
            this.setState({
                startDate:date
            })
        }     
    }

    handleButtonClick = () =>{
        this.props.callback(this.state.startDate, this.state.endDate)
    }

    render(){
        return (
            <div className="search">
                <div>format dd-mm-yyyy</div>
                <SearchInput text='from' callback={this.handleChangeInput}/>
                <SearchInput text='to' callback={this.handleChangeInput}/>
                <Button onClick={this.handleButtonClick}>send</Button>
            </div>
        )   
    }
}
