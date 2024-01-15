import axios from "axios";
const instance = axios.create({
    baseURL: "https://659a84a0652b843dea53a3f9.mockapi.io/Crud/",
})
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default instance