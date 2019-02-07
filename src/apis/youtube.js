import axios from 'axios';

const KEY = 'AIzaSyBKBhvuPB1uoZBdIQil_Gj68j7ihlUu1hw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});