import { useState } from 'react'

// in JS "export" means this function can be used outside this file
const Board = () =>
{
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true)

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = ""+winner+" WINS!"
  }
  else {
    status = "Next player: " + (xIsNext ? 'X' : 'O')
  }

  const resetGame = () =>{
    setSquares(Array(9).fill(null))
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
      nextSquares[i] = 'X' 
    }
    else
    {
      nextSquares[i] = 'O'
    }
    setIsNext(!xIsNext)
    setSquares(nextSquares)
  }

  return(
    <>
    <div className='game'>
        <div className='status'>{status}</div>
        <table className='board'>
          <tbody>
            <tr className='board-row'>
              <td><Square markType={squares[0]} onSquareClick={() => handleClick(0)} /></td>
              <td><Square markType={squares[1]} onSquareClick={() => handleClick(1)} /></td>
              <td><Square markType={squares[2]} onSquareClick={() => handleClick(2)} /></td>
            </tr>
            <tr className='board-row'>
              <td><Square markType={squares[3]} onSquareClick={() => handleClick(3)} /></td>
              <td><Square markType={squares[4]} onSquareClick={() => handleClick(4)} /></td>
              <td><Square markType={squares[5]} onSquareClick={() => handleClick(5)} /></td>
            </tr>
            <tr className='board-row'>
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

const Button28 = ({text,onButtonClick}) => {
  return(
    <button className='button-28' onClick={onButtonClick}>
    {text}
  </button>
  )
}

const Square = ({markType, onSquareClick}) =>
  {
    const [value,setValue] = useState(null)
    let color = null
  
    if (markType == 'X') {
      color='red'
    }
    else {
      color='blue'
    }
  
    return(
      <button style={{color: color}} className='square square-row' onClick={onSquareClick}>
        {markType}
      </button>
    )
  }

const calculateWinner = (squares) => {
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

export default Board