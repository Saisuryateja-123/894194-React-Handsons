  
import React,{Component} from 'react';
import './App.css';
import Office from './Components/Office';
class App extends Component{
  state={
    itemName:[
      {Name:"DBS",Rent:50000,Address:"Chennai"}      
    ]
  }
  render(){
    return (
      
        
        <div className="div1">
        
          <Office itemName={this.state.itemName} />
        </div>
      
    )
  }
}
export default App;