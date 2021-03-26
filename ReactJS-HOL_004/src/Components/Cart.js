import React,{ Component } from "react";
import '../Components/Cart.css';

class Cart extends Component{
    render(){

    
 const items= this.props.item.map((item)=>
{
    return(
        <tr>
            <td>{item.itemname}</td>
            <td>{item.price}</td>
        </tr>
    )});
    return(
        <div className='title'>
            <table className='item'>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {items}
            </table>
        </div>
     )
    }

}
export default Cart;
