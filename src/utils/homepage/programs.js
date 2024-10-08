import axios from "axios"

const programs_api = axios.create({
    baseURL: "https://api.shedahouse.com/v1/api/"
})

export { programs_api }
