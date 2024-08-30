import { useState } from 'react'

export const Square = ({markType, onSquareClick}) =>
    {
        const [value,setValue] = useState(null)

        return(
          <button className='square' onClick={onSquareClick}>
            {markType}
          </button>
        )
    }