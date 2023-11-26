import React from 'react'
import "../Scss/components/_carouselCard.scss"

function CarouselCard
({text,img}) {
  return (
    <>
    <div className="carouselCard_continer">
      <p>{text}</p>
      <div className="carouselCard_image">
        <img src={img} alt="" />
      </div>
    </div>
        
    </>
  )
}

export default CarouselCard
	