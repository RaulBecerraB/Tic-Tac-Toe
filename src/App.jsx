import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
    </>
  )
}

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
    <div className='board-row'>
      <Square markType={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square markType={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square markType={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className='board-row'>
      <Square markType={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square markType={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square markType={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className='board-row'>
      <Square markType={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square markType={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square markType={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    </div>
    </>
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
      <button style={{color: color}} className='square' onClick={onSquareClick}>
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