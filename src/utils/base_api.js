import axios from "axios"

const base_api = axios.create({
    baseURL: "https://api.shedahouse.com/"
})

const base_URL = "https://api.shedahouse.com/"

export {base_api, base_URL}