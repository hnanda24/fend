import React from 'react'
import { data } from '../assets/mockData'
import '../assets/OngoingEvent.css'

const OngoingEvent = () => {
  return (
    <div className='resCard'>
        {data.map((val) => {
            return <div>
            <div className='resImage'> <img src={val.image_link}/> </div>
            <div className='info'>
            <h3 className='resName'>{val.name}</h3>
            <h4 className='resCuisine'>{val.location}</h4>
            <h4 className='resRating'>{val.pricing}</h4>
            </div>
        </div>
        })};
  </div>
  )
}

export default OngoingEvent

