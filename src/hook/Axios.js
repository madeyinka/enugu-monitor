const axios = require('axios')

const baseUrl = process.env.REACT_APP_BACKEND_API

export default axios.create({
    baseURL:baseUrl
})