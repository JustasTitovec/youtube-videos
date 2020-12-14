import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube.js';
import VideoList from './components/VideoList';

class App extends React.Component {
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      q: term,
    });

    this.setState({ videos: response.data.items });
  };

  npm;
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
