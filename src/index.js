import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import './styles/index.css'
import HomePage from './pages/HomePage';
import SinglePage from './pages/singlePage';

class App extends React.Component{
    render(){
        return(
            <Router>    
                <div>     
                    <Route path='/:id' component={SinglePage}/>
                    <Route path='/' exact component={HomePage}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

