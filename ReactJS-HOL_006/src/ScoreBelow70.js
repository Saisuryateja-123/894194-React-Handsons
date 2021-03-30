import React, { Component } from 'react';
import PLAYERS from './Details/Players';
class  Player extends Component{
    render(){
        const{name,score}=this.props.player;
    return(
        <span>
            <li>{name} {score}</li>
        </span>
    )
    }
    
}
class PlayerLess extends Component{
    render(){
        return(
            <div>
                  <h2>List of Players having Score Less than 70</h2>
                    <div>{
                       PLAYERS.map(PLAYER =>{
                           if(PLAYER.score<=70){
                    return(
                        <Player key={PLAYER.id} player={PLAYER} />
                    );
                           }
                       }
                       )
                    }
                    </div>

                
            
            </div>
        );
    }
}
export default PlayerLess;