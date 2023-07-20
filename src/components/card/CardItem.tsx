import React from 'react'
import "./CardStyle.scss"

const CardItem = (props: any) => {
  return (
   <div className='main-card-container'>
        <div className='card-description'>
            <div>
               {props.mainText}
            </div>
            
        </div>
        <div className='card-image'>

        </div>
   </div>
  )
}

export default CardItem