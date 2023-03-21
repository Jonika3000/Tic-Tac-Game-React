import React, { useState } from 'react';
import Square from './Square';
import Rating from './Rating';
import './styleTicTacToe.css'
import './Login.css'
function Board(props) {
    let [squares, setSquares] = useState(Array(9).fill(null));
    let [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        const newSquares = squares.slice();
        if (calculateWinner(squares) || newSquares[i]) {  
            return;
        }
        
        newSquares[i] = xIsNext ? krest : nulik;
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    function renderSquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }
    function replay() {
        cheack();
        xIsNext = true;
        setSquares(Array(9).fill(null));
    }
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {   
                return squares[a]; 
            }
        } 
        return null;
    }
    function AddScore(nick) { 
        for (let i = 0; i < props.users.length; i++) {
            if (props.users[i].login == nick) {
                props.users[i].score = props.users[i].score+1;
                props.updateState(props.users);
            }
        }
    }
    const winner = calculateWinner(squares);
    const krest = 'X';
    const nulik = 'O';
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? krest : nulik}`;
    function cheack()
    {
        console.log(winner);
        if (winner == krest)
        { 
            AddScore(document.getElementById("FirstN").value);
        }
        else if (winner == nulik)
        {
            AddScore(document.getElementById("SecondN").value);
        }
    }
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button className='OverBtn' onClick={() => replay()}>Start over</button>
            <div className="col-15">
                <input className="textbox-15" type="text"
                    id="FirstN" placeholder="First player nick" />
                <span className="focus-border-15"></span>
            </div>
            <div className="col-15">
                <input className="textbox-15" type="text"
                    id="SecondN" placeholder="Second player nick" />
                <span className="focus-border-15"></span>
            </div>
            <ul>{props.users.map((item, index) => <Rating key={item.id} item={item} index={index}></Rating>)}</ul>
        </div>
    );
}

export default Board;
