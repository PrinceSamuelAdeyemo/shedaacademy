import axios from "axios"

const createprograms_api = axios.create({
    baseURL: "https://api.shedahouse.com/v1/api/admin/program/create.php/"
})

export default createprograms_api;