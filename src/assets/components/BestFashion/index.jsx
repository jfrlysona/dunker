import React from 'react'
import './style.css'

function BestFashion() {
  return (
    <div className='fashionMain'>
      <div className='buyBestFashion'>
        <p>BUY BEST FASHION</p>
      </div>
      <div className='fashion'>
        <div className='fashionTop'>
          <p>FASHION <sup className='sup'>(28)</sup></p>
          <p>CLOTHES <sup className='sup'>(46)</sup></p>
          <p>HOODIES <sup className='sup'>(6)</sup></p>
        </div>
        <div className='fashionCenter'>
          <p> <sup className='sup'>(6)</sup>JACKET</p>
          <p> <sup className='sup'>(25)</sup>SPORT</p>
          <p> <sup className='sup'>(15)</sup>BAGS</p>
          <p> <sup className='sup'>(20)</sup>FOOTWEAR</p>
        </div>
        <div className='fashionButtom'>
          <p> <sup className='sup'>(1)</sup>T-SHIRT</p>
          <p> <sup className='sup'>(3)</sup>CAP</p>
        </div>
      </div>
    </div>
  )
}

export default BestFashion