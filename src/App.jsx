import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
    </>
  )
}

const Square = () =>
{
  const [value,setValue] = useState(null)

  const handleClick = () => setValue('X')
  return(
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  )
}

// in JS "export" means this function can be used outside this file
const Board = () =>
{
  return(
    <>
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
    </>
  )
}

export default Board