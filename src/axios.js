import axios from "axios";

const monaxios = axios.create({
    baseURL: "http://localhost:8000"
})

export default monaxios;