import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import { Component3 } from './components/Component3'
import { Component4 } from './components/Component4'

class App extends Component {
  render(){return (
    <div className="App">
         <Component1></Component1>
         <Component2></Component2>
         <Component3></Component3>
         <Component4></Component4>
    </div>
  );
  }
}

export default App;
