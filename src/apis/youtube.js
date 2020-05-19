import axios from 'axios';

const KEY = 'AIzaSyBqpBN26n4_ZWcbegKCH7d3sl3qUJCdpWI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});
