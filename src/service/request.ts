import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const getCardInfo = async () => {
    return await instance.get('/requests', {
    }).catch(function(error) {
        return (error.response);
    })
}