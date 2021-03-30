
import ListOfPlayers from './ListOfPlayers';
import Playerslessthan70 from './ScoreBelow70';
import OddPlayers from './OddPlayers';
function App() {
  let flag=true;
 if(flag){
  return (   
    <div>
      <ListOfPlayers />
      <hr/>
      <Playerslessthan70 />
    </div>
  );
    }
    else{
      return(
      <div>
      <OddPlayers />
      </div>
      );
    }
  
}

export default App;