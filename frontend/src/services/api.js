import axios from "axios";

const api = axios.create({
    baseURL: "https://portfolio-website-yx51.onrender.com/api/",
});

export default api;