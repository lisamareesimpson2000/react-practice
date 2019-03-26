import React, { Component } from 'react';
//import logo from './logo.svg'; 
//any other component we want we have to import
import './App.css';
import Content from './Content';

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      item:[],
      isLoaded:false
    }
  }
  componentDidMount(){
    fetch('https://my.api.mockaroo.com/person.json?key=bd1d60f0')
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        isLoaded:true,
        items:json
      })
    })
  }
  changeCss(event){
    event.currentTarget.style.background = 'aqua';
  }

  render() {
    var {isLoaded, items} =this.state;
    if(!isLoaded){
      return(
        <div> '...Loading'</div>
      )
    } else {
      return(
        <div className='row'>
          <div className='col'>
            <ul>
                {items.map(item =>(
                <li className='myList'>{item.id} {item.first_name} <br/>Email: {item.email} <br/>Avatar: 
                <img src={item.avatar} alt="Avatar" width="100" height="100"></img>
                <Content/>
                <button className='btn' onClick={this.changeCss}>clickMe</button>
                </li>
                ))};
              </ul>
          </div>
          
        </div>
      )
    }
  }
}

export default App;
