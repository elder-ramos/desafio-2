import axios from 'axios'

const paisesAPI = axios.create({
    baseURL: 'https://amazon-api.sellead.com/country'
})

export default paisesAPI