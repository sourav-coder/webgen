import axios from "axios"

const instance = axios.create({
    baseURL: "https://webgen-assessment-backend.herokuapp.com"
})

export default instance