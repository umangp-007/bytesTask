import React from 'react'
import { Image } from 'react-bootstrap'

const Profile = ({ imageSrc, height = '56px', width = '56px', borderRadius = '50%' }) => {
  return (
    <Image 
      style={{ height, width, borderRadius }} 
      src={imageSrc} 
    />
  )
}

export default Profile
