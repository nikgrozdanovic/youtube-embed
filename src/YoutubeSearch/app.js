import React, { useState } from 'react'
import axios from 'axios'
import VideosList from '../VideosList/app'
import EmbeddedVideo from '../EmbeddedVideo/app'
import './YoutubeSearch.css'

const APIs = {
  youtube: 'AIzaSyDPfjshXwZ-GgZ1ko4har_OujJzR2ypgTs',
  twitch: '',
}

const YouTubeSearch = () => {
  const [keyword, setKeyword] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedVideoId, setSelectedVideoId] = useState('')
  const [selectedSource, setSelectedSource] = useState('youtube')

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const keyword = e.target.keyword.value

    try {
      const apiKey = APIs[selectedSource]
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&key=${apiKey}`
      )
      console.log(response.data.items)
      setSearchResults(response.data.items)
      setSelectedVideoId('')
    } catch (err) {
      console.error(err)
    }
  }

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId)
  }

  const handleChangeSelect = (e) => {
    console.log(e.target.value)
    setSelectedSource(e.target.value)
  }

  return (
    <div className='container'>
      <form onSubmit={submitForm}>
        <input
          type='text'
          value={keyword}
          onChange={handleChange}
          name='keyword'
        />
        <select
          name='videoSource'
          value={selectedSource}
          onChange={handleChangeSelect}
        >
          <option value='youtube'>Youtube</option>
          <option value='twitch'>Twitch</option>
        </select>
        <button type='submit'>Search</button>
      </form>

      {searchResults.length > 0 && (
        <VideosList
          videos={searchResults}
          selectedVideoId={selectedVideoId}
          onVideoSelect={handleVideoSelect}
        />
      )}

      {selectedVideoId && <EmbeddedVideo videoId={selectedVideoId} />}
    </div>
  )
}

export default YouTubeSearch
