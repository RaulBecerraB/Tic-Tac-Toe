import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
    </>
  )
}

const Square = ({markType, onSquareClick}) =>
{
  const [value,setValue] = useState(null)

  return(
    <button className='square' onClick={onSquareClick}>
      {markType}
    </button>
  )
}

// in JS "export" means this function can be used outside this file
const Board = () =>
{
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true)

  const handleClick = (i) => {
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
    </>
  )
}

export default Board