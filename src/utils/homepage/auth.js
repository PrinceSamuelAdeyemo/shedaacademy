import axios from "axios"

const auth_api = axios.create({
    baseURL: "https://api.shedahouse.com/v1/api/auth/"
})

export default auth_api
