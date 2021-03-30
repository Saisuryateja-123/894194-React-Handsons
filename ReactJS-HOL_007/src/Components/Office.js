import React,{ Component } from "react";
import officeimg from './office.jpg'

import './offic.css';

class Office extends Component{
    render(){
        let colors =[];
        return(
            this.props.itemName.map((office)=>{
                if(office.Rent<=60000){
                  colors.push("textRed");
                } else {
                  colors.push("textGreen");
                }
                return (
                    <div>
                        <h1>Office Space, at Affordable Range</h1>
                        <img src={officeimg} width="300" height="200" ></img>
                        <h1>Name: {office.Name}</h1>
                        <h3 className={colors[colors.length-1]}>Rent: Rs. {office.Rent}</h3>
                        <h3>Address: {office.Address}</h3>
                    </div>
                )
            })
        )
    }
}
export default Office;