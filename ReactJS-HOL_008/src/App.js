import React,{Component} from 'react';
import './App.css';
import Form from './Components/Form';
class App extends Component{
  state={
    count:0
  }
  Increment=()=>{
    alert("Hello Member!");
    return this.setState({
      count:this.state.count+1
    })
  };
  Decrement=()=>{
    return this.setState({
      count:this.state.count-1
    })
  };
  New=()=>{
    alert("Welcome");
  }
  OnPress=()=>{
    alert("I was clicked");
  }
  render(){
    return (
      <div >
        <h3>{this.state.count}</h3>
        <button onClick={this.Increment}>Increment</button><br></br>
        <button onClick={this.Decrement}>Decrement</button><br></br>
        <button onClick={this.New}>Say Welcome</button><br></br>
        <button onClick={this.OnPress}>Click Me</button><br></br>
        <h1 className="head">Currency Convertor!!!</h1>
        <Form />
      </div>
    )
  }
}
export default App;