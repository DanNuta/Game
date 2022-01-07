import React, { Component } from 'react';
import Cell from "./Cell";



class LightsOutGame extends Component {

    static defaultProps = {
        nrows: 5,
        ncols: 5,
        lightOn: 0.25
    }

    state = {
        board: this.randomBoard()
    }

    randomBoard() {
        let board = [];

        for(let x = 0; x < this.props.nrows; x++){
            let rows = [];
            for(let y = 0; y < this.props.ncols; y++){
                rows.push(Math.random() < this.props.lightOn)
            }

            board.push(rows)
        }

        return board

    }


    coords = (coord) =>{
        
        let ncols = this.props.ncols;
        let nrows = this.props.nrows;
        let board = this.state.board;
        let [x, y] = coord.split("-").map(Number)

        function change(x, y){
            if((x >= 0 && x < nrows) && (y >= 0 && x < ncols)){
                board[x][y] = !board[x][y]
            }
        }

        change(x, y);
        change(x + 1, y);
        change(x - 1, y);
        change(x, y + 1);
        change(x, y - 1);
        this.setState({board :board})

    }

    






    render() { 

        let board = [];

        for(let x = 0; x < this.props.nrows; x++){
            let rows = [];

            for(let y = 0; y < this.props.ncols; y++){
                let coord = `${x}-${y}`
                rows.push(<Cell coord={() =>this.coords(coord)} isLight={this.state.board[x][y]}/>)
            }

            board.push(<tr>{rows}</tr>)
        }




        return ( 
            <div className="game">
                <table>
                    <tbody>{board}</tbody>
                </table>
            </div>
         );
    }
}
 
export default LightsOutGame;