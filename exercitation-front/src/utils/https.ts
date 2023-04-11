import axios, {type AxiosRequestConfig} from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 20 * 1000;
// axios.defaults.maxBodyLength = 5 * 1024 * 1024;
// axios.defaults.withCredentials = true

axios.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        const token =localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        // config.params = {
        //     ...config.params,
        //     t: Date.now(),
        // }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        const {authorization} =  response.headers
      authorization && localStorage.setItem("token",authorization)
        return response
    },
    function (error) {
        return Promise.reject(error);
    }
);

interface Http {
    get<T=any>(url: string, params?: unknown): Promise<responseType<T>>;

    post<T=any>(url: string, params?: unknown): Promise<responseType<T>>;

    upload<T=any>(url: string, params: unknown): Promise<responseType<T>>;

    patch<T=any>(url: string, params: unknown): Promise<responseType<T>>;

    delete<T=any>(url: string, params: unknown): Promise<responseType<T>>;

    download(url: string): void;
}

const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {params})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    post(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, params)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    patch(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .patch(url, params)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    delete(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url, {params})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    upload(url, file) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, file, {
                    headers: {"Content-Type": "multipart/form-data"},
                })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    download(url) {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = url;
        iframe.onload = function () {
            document.body.removeChild(iframe);
        };

        document.body.appendChild(iframe);
    },
};

export default http;
