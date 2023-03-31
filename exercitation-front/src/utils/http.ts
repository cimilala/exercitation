import axios, { type AxiosInstance }  from "axios";
 const instance:AxiosInstance= axios.create({
            baseURL:"http://localhost:3000",
            timeout:20 * 1000,
            // maxBodyLength:5 * 1024 * 1024,
            // withCredentials :true//跨域请求时是否带token
 })
 instance.interceptors.request.use(
    (config) => {
        const token =localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
        return config
    },
   (err) => { 
    return Promise.reject(err)
    }
    )
    instance.interceptors.response.use(
    (response) => {
      const {authorization} =  response.headers
      authorization && localStorage.setItem("token",authorization)
        return response.data
     },
    (err) => {
        return Promise.reject(err.response.data)
     }

    )
    // interface Http {
    //     get<T>(url: string, params?: unknown): Promise<T>;
    
    //     post<T>(url: string, params?: unknown): Promise<T>;
    
    //     upload<T>(url: string, params: unknown): Promise<T>;
    
    //     put<T>(url: string, params: unknown): Promise<T>;
    
    //     delete<T>(url: string, params: unknown): Promise<T>;
    
    //     download(url: string): void;
    // }
    // const instance: Http = {
    //     get(url, params) {
    //         return new Promise((resolve, reject) => {
    //             axios
    //                 .get(url, {params})
    //                 .then((res) => {
    //                     resolve(res.data);
    //                 })
    //                 .catch((err) => {
    //                     reject(err.data);
    //                 });
    //         });
    //     },
    
    //     post(url, params) {
    //         return new Promise((resolve, reject) => {
    //             axios
    //                 .post(url, params)
    //                 .then((res) => {
    //                     resolve(res.data);
    //                 })
    //                 .catch((err) => {
    //                     reject(err.data);
    //                 });
    //         });
    //     },
    
    //     put(url, params) {
    //         return new Promise((resolve, reject) => {
    //             axios
    //                 .put(url, JSON.stringify(params))
    //                 .then((res) => {
    //                     resolve(res.data);
    //                 })
    //                 .catch((err) => {
    //                     reject(err.data);
    //                 });
    //         });
    //     },
    
    //     delete(url, params) {
    //         return new Promise((resolve, reject) => {
    //             axios
    //                 .delete(url, {params})
    //                 .then((res) => {
    //                     resolve(res.data);
    //                 })
    //                 .catch((err) => {
    //                     reject(err.data);
    //                 });
    //         });
    //     },
    
    //     upload(url, file) {
    //         return new Promise((resolve, reject) => {
    //             axios
    //                 .post(url, file, {
    //                     headers: {"Content-Type": "multipart/form-data"},
    //                 })
    //                 .then((res) => {
    //                     resolve(res.data);
    //                 })
    //                 .catch((err) => {
    //                     reject(err.data);
    //                 });
    //         });
    //     },
    
    //     download(url) {
    //         const iframe = document.createElement("iframe");
    //         iframe.style.display = "none";
    //         iframe.src = url;
    //         iframe.onload = function () {
    //             document.body.removeChild(iframe);
    //         };
    
    //         document.body.appendChild(iframe);
    //     },
    // };
    export default instance;