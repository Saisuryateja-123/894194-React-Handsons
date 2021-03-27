
import React,{Component} from 'react';
import Button from '../Components/Button';
import '../Components/CountPeople.css';
class CountPeople extends Component{
        state={
            entrycount:0,
            exitcount:0,
            c:0   
        };
    
   
    updateEntry=()=>{
        this.setState({
            c:this.state.c +1,
            entrycount:this.state.entrycount+1
        }
        );
    }
    updateExit=()=>{
        this.setState({
            c:this.state.c -1,
            exitcount:this.state.exitcount+1
        }
        );
    } 
   

render(){
    let {c}=this.state;
    let {entrycount}=this.state;
    let{exitcount}=this.state;
    return(
        <div className='head'> 
          {/*   <div>
                <h3>Count:</h3>
                <h3>{c}</h3>
            </div> */}
            <div className='login'>
            <Button title="Login" action={this.updateEntry}/><span> {entrycount} People Entered!!!</span>
            </div>
        <div className='exit'>
            <Button title="Exit" action={this.updateExit}/><span> {exitcount} People Left!!!</span>
        </div>

        </div>
    );
}

}
export default CountPeople;









