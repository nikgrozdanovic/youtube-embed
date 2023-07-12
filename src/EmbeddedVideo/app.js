import React from 'react'

const EmbeddedVideo = ({ videoId }) => {
  return (
    <div>
      <h2>Selected Video</h2>
      <iframe
        title='YouTube Video'
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default EmbeddedVideo
