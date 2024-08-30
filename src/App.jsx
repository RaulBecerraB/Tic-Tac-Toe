import { useState } from 'react'
import { Button28 } from './components/Button28'
import { Square } from './components/Square'

const redCircleSVG = <svg width="52" height="52" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="49" cy="49" r="43" stroke="#D23E3E" stroke-width="12"/>
</svg> 

const blueXSVG = <svg width="80" height="80" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="40.3051" y="28.9914" width="98" height="15" transform="rotate(45 40.3051 28.9914)" fill="#1A75FF"/>
<rect x="28.9913" y="98.2878" width="98" height="15" transform="rotate(-45 28.9913 98.2878)" fill="#1A75FF"/>
</svg>

const App = () =>
{
  return(
    <>
      <Game />
    </>
  )
}

// in JS "export" means this function can be used outside this file
const Game = () =>
{
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    if (winner == blueXSVG)
    {
      status = "X WINS!"
    }
    else
    {
      status = "O WINS"
    }
  }
  else {
    status = "Next player: " + (xIsNext ? 'X' : 'O')
  }

  const resetGame = () =>{
    //fill all squares with nothing
    setSquares(Array(9).fill(null))
    //make sure the first symbol to play is X
    setXIsNext(true)
  }

  const handleClick = (i) => {

    //Checks if the clicked square has already something inside it
    //OR checks if a winner is already choosen
    if (squares[i] || calculateWinner(squares)){
      return
    }
    //This is where Board handles the state of every Square 
    const nextSquares = squares.slice()

    if (xIsNext) 
    {
      nextSquares[i] = blueXSVG
    }
    else
    {
      nextSquares[i] = redCircleSVG
      
    }
    setXIsNext(!xIsNext)
    setSquares(nextSquares)
  }

  return(
    <>
    <div className='game' >
        <h2 className='status'>{status}</h2>
        <table className='board'>
          <tbody>
            <tr className='board-row first-line'>
              <td><Square markType={squares[0]} onSquareClick={() => handleClick(0)} /></td>
              <td><Square markType={squares[1]} onSquareClick={() => handleClick(1)} /></td>
              <td><Square markType={squares[2]} onSquareClick={() => handleClick(2)} /></td>
            </tr>
            <tr className='board-row'>
              <td><Square markType={squares[3]} onSquareClick={() => handleClick(3)} /></td>
              <td><Square markType={squares[4]} onSquareClick={() => handleClick(4)} /></td>
              <td><Square markType={squares[5]} onSquareClick={() => handleClick(5)} /></td>
            </tr>
            <tr className='board-row last-line'>
              <td><Square markType={squares[6]} onSquareClick={() => handleClick(6)} /></td>
              <td><Square markType={squares[7]} onSquareClick={() => handleClick(7)} /></td>
              <td><Square markType={squares[8]} onSquareClick={() => handleClick(8)} /></td>
            </tr>
          </tbody>
        </table>
        <Button28 text={"RESET"} onButtonClick={resetGame} />

      </div>
    </>
  )
}

const calculateWinner = (squares) => 
{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App