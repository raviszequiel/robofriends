import React, {Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scrool from '../components/Scrool';
import './App.css';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
        })
        .then(users => {
            this.setState({ robots: users})
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        // console.log(event.target.value);
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if( this.state.robots.length === 0 ) {
            return <h1>Loading ...</h1>
        }
        else {
            // console.log(filteredRobots);
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scrool>
                        <CardList robots={filteredRobots}/>
                    </Scrool>                    
                </div>
            );
        }            
    }
}

export default App
