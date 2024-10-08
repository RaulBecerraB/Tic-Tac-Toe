import { useState } from 'react'
import { Button28 } from './components/Button28'
import { Square } from './components/Square'

const iconsRadio = 50;
const redCircleSVG = <svg width={iconsRadio} height={iconsRadio} viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="49" cy="49" r="43" stroke="#D23E3E" stroke-width="12"/>
</svg>
const blueXSVG = <svg width={iconsRadio} height={iconsRadio} viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="11.3051" y="-0.00862122" width="98" height="15" transform="rotate(45 11.3051 -0.00862122)" fill="#1A75FF"/>
<rect x="-0.00866699" y="69.2878" width="98" height="15" transform="rotate(-45 -0.00866699 69.2878)" fill="#1A75FF"/>
</svg>

const App = () =>
{
  return(
    <>
      <Game />
    </>
  )
}

const Game = () =>
{
  //TODO: Reorder all this code!

  const returnEmptyArray = () => Array(9).fill(null)
  const [squares, setSquares] = useState(returnEmptyArray());
  const [xIsNext, setXIsNext] = useState(true)

  const winner = getWinnerSymbol(squares)

  const isDraw = () => squares.every(square => square != null) 
  const isGameWon = () => getWinnerSymbol(squares) !== null ? true : false

  let status

  if (isGameWon()) 
  {
    status = winner == blueXSVG ? 'X WINS!':'O WINS'
  }
  else if (isDraw()) 
  {
      status = "DRAW!"
  }
  else 
  {
      status = "Next player: " + (xIsNext ? 'X' : 'O')
  }

  const resetGame = () =>
  {
    emptyAllSquares()
    setXIsNext(true)
  }

  const emptyAllSquares = () =>
  {
    setSquares(returnEmptyArray())
  }

  const handleClick = (clickedSquare) => 
  {
    if (isSquareFilled(clickedSquare) || isGameWon()) return
    fillClickedSquareWithNextSymbol(clickedSquare,squares)
  }

  const fillClickedSquareWithNextSymbol = (clickedSquare, squares) =>
  {
    const nextSquares = squares.slice()
    nextSquares[clickedSquare] = fillSquareWithNextSymbol(xIsNext)
    updateGameState(nextSquares)
  }

  const updateGameState = (nextSquares) =>
  {
    setXIsNext(!xIsNext)
    setSquares(nextSquares)
  }

  const fillSquareWithNextSymbol = (xIsNext) => xIsNext ? blueXSVG : redCircleSVG

  const isSquareFilled = (clickedSquare) => squares[clickedSquare] !== null ? true : false

  return(
    <>
    <div className='game' >
        <h2 className='status'>{status}</h2>
        <table className='board'>
          <tbody>
            <tr className='first-line'>
              <td><Square markType={squares[0]} onSquareClick={() => handleClick(0)} /></td>
              <td><Square markType={squares[1]} onSquareClick={() => handleClick(1)} /></td>
              <td><Square markType={squares[2]} onSquareClick={() => handleClick(2)} /></td>
            </tr>
            <tr>
              <td><Square markType={squares[3]} onSquareClick={() => handleClick(3)} /></td>
              <td><Square markType={squares[4]} onSquareClick={() => handleClick(4)} /></td>
              <td><Square markType={squares[5]} onSquareClick={() => handleClick(5)} /></td>
            </tr>
            <tr className='last-line'>
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

const getWinnerSymbol = (squares) => 
{
  //This function calulates wich symbol is making a line of 3
  // and RETURNS the winner (X or O) 
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