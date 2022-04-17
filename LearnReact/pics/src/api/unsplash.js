import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4_skYmyt_oLeiN3053WTiQqWc-ntHXrVLba3tub498I'
    }
})

