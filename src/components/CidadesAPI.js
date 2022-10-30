import axios from 'axios'

const cidadesAPI = axios.create({
    baseURL: 'https://amazon-api.sellead.com/city'
})

export default cidadesAPI