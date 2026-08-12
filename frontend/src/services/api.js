import axios from "axios";

const api = axios.create({
    baseURL: "https://portfolio-website-fus9.onrender.com/api/",
});

export default api;