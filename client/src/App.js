import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar';




class App extends React.Component {
  // you actually don't need a constructor 🤯
  state = {
    users: [],
    key: Date.now(),
    
  };

  componentDidMount() {
  
    axios.get('http://localhost:5000/api/players').then(response => {
      console.log(response);
      this.setState({ users: response.data });
    });

  }
  

  render() {
    return (
      <div className="App container">
       <NavBar data-testid="nav-bar"/> 
        <p data-testid="header-text" className="headText">Women's World Cup Players</p>

        
  
        
        <div data-testid="player-grid" className="users">
          {this.state.users.map(data => (
            <div className="card">
            <h3 className="name">{data.name}</h3>
            <p className="p">{data.country}</p>
            <p className="p">{data.searches}</p>
            
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App