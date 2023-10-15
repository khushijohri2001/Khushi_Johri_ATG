import React, { useState } from 'react'
import locationIcon from '../assets/location_on-24px.png'
import editIcon from "../assets/edit-24px.png"
import clearIcon from "../assets/clear-24px.png"
import infoIcon from '../assets/error_outline-24px.png'

const LocationFilter = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputLocation, setInputLocation] = useState('')
  return (
    <div className='d-none d-sm-flex flex-column' style={{width: "18vw"}}>
        <div className='d-flex justify-content-between align-items-center gap-4 border-bottom py-2 px-1 my-3'>
           <div className='d-flex align-items-center gap-2'>
           <img src={locationIcon} alt="location icon" />
            <input placeholder='Enter Your Location' className='border-0' value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} onFocus={() => setIsInputFocused(true)} onBlur={() => setIsInputFocused(false)} />
           </div>

           <div>
            {
                isInputFocused ?  <img src={editIcon} alt="edit icon" /> : <img src={clearIcon} alt="clear icon" onClick={() => setInputLocation("")} /> 
            }
           
           </div>
        </div>


        <div className='d-flex gap-2 mt-4'>
          <img src={infoIcon} alt="info icon" className='img-fluid' style={{width: "20px", height:"20px"}} />
          <p className='opacity-50' style={{fontSize: "0.8vw", paddingTop: "-100px"}} >Your location will help us serve better and extend a personalised experience.</p>
        </div>
    </div>
  )
}

export default LocationFilter