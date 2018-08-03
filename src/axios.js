import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://blog-9734f.firebaseio.com/blog.json'
})

export default instance;