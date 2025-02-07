import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '0a931202bdmsh7a2692aeb90217cp11c137jsn3790d3de052c',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};
export const ApiService = {
    async fetching(url) {
        const response = await axios.request(`${BASE_URL}/${url}`,options);
        return response.data;
    }
}