import React,{Component} from 'react';
import '../Components/Button.css';
 class Button extends Component{
     render(){
         return<button onClick={this.props.action}>{this.props.title}</button>
     }
 }
 export default Button;