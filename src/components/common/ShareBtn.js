import React from 'react'
import shareIcon from "../../assets/baseline-share-24px.png"

const ShareBtn = ({path}) => {
  return (
    <div className='d-flex align-items-center gap-2 w-auto p-2 rounded' style={{backgroundColor: "#F1F3F5"}}>
        <img src={shareIcon} alt="share" />
       <snall> Share</snall>
    </div>
  )
}

export default ShareBtn