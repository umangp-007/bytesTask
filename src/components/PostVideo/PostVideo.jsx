import React from 'react'

const PostVideo = ({VideoLink}) => {
  return (
    <div>
    <video width="100%" controls>
        <source src={VideoLink} type="video/mp4"/>
    </video>
</div>
  )
}

export default PostVideo