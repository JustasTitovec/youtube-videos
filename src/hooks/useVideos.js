import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyD_d-eO2k0oY6yjcmkKefMcq0FW8phokEs';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const { data } = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
        q: term,
      },
    });

    setVideos(data.items);
  };

  return { videos, search };
};

export default useVideos;
