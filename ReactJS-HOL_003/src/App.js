import React,{ Component } from 'react';
import {CalculateScore} from '../src/Components/CalculateScore';
class App extends Component{
  render(){
    return(
      <div>
        <CalculateScore Name={"Steeve"}
        School={"DNV Public School"}
        total={284}
        goal={3}
        />
      </div>
    )
  }
}
export default App;
