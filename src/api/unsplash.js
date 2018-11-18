import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 
        'Client-ID b0e9f1ea1b59959ac24cc6c9d0ed35a2c0628df7f9e2aae498b07b8502cab8cf'
    }
});