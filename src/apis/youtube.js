import axios from 'axios';

const KEY = 'AIzaSyD_d-eO2k0oY6yjcmkKefMcq0FW8phokEs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
