import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
    </>
  )
}

// in JS "export" means this function can be used outside this file
export default function Board()
{
  return(
    <>
    <div className='board-row'>
      <button className='square'>1</button>
      <button className='square'>2</button>
      <button className='square'>3</button>
    </div>
    <div className='board-row'>
      <button className='square'>4</button>
      <button className='square'>5</button>
      <button className='square'>6</button>
    </div>
    <div className='board-row'>
      <button className='square'>7</button>
      <button className='square'>8</button>
      <button className='square'>9</button>
    </div>
    
    </>
  )
}