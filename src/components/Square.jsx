import { useState } from 'react'

export const Square = ({markType, onSquareClick}) =>
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