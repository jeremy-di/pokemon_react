import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://pokebuildapi.fr/api/v1'
})

export default Axios