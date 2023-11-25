import React from 'react'
import NewCollections from '../NewCollections'
import BestFashion from '../BestFashion'
import NewSale from '../NewSale'
import MarkaLogo from '../MarkaLogo'
import './style.css'

function Section3() {
  return (
    <div className='section3'>
        <NewCollections/>
        <BestFashion/>
        <NewSale/>
        <MarkaLogo/>
    </div>
  )
}

export default Section3