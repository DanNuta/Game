import React, { Component } from 'react';
import "./style.css";


class Cell extends Component {

    coord = () =>{
        this.props.coord()
    }



    render() { 

      let changeClass = (this.props.isLight) ? "Cell_color" : "Cell_none"

       return (<td onClick={this.coord}  className={changeClass}></td>);
         
    }
}
 
export default Cell;