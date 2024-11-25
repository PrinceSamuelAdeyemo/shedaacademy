import axios from "axios"

const getprograms_api = axios.create({
    baseURL: "https://api.shedahouse.com/v1/api/admin/program/get.programs.php"
})

export default getprograms_api;