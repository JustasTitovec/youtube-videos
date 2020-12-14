import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube.js';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const KEY = 'AIzaSyD_d-eO2k0oY6yjcmkKefMcq0FW8phokEs';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  npm;
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />

        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
