import './Card.css'
import React from 'react'
// para cargar por defecto imgCharacter={bard},nameCharacter='bard',quoteCharacter='Ay caramba'
export const Card = ({imgCharacter,nameCharacter,genderCharacter}) => {
  return (
    <div className='card-simpsons'>
        <img className='imgCharacter' src={imgCharacter} alt={nameCharacter} />
        <h1 className='nameCharacter'>{nameCharacter} </h1>
        <p className='genderCharacter'>{genderCharacter} </p>
    </div>
  )
}
