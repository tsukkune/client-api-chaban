import React from 'react';
import SearchInput from './searchInput'
import {Button} from 'react-materialize'

export default class Search extends React.Component {
    constructor(props){
        super(props)
        console.log('props : ',props)
    }

    render(){
        return (
            <div>
                <SearchInput/>
                <SearchInput/>
                <Button/>
            </div>
        )   
    }
}
