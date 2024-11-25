import axios from "axios"
import { base_URL } from "../../base_api"

const overview_api = axios.create({
    baseURL: `${base_URL}v1/api/admin/dashboard/overview.php`
})

export default overview_api;