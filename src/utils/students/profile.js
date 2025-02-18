import axios from "axios"

const profile_api = axios.create({
    baseURL: "https://api.shedahouse.com/v1/api/student/"
})

export default profile_api
