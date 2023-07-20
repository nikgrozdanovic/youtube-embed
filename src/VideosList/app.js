import React from 'react'
import { useSelector } from 'react-redux'

const VideosList = ({ selectedVideoId, onVideoSelect }) => {
  const videos = useSelector((state) => state.search.value)

  return (
    <div className='container'>
      <h2>Search Results</h2>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <button
            onClick={() => onVideoSelect(video.id.videoId)}
            disabled={video.id.videoId === selectedVideoId}
          >
            {video.snippet.title}
          </button>
        </div>
      ))}
    </div>
  )
}

export default VideosList
