import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from "element-plus";

const baseURL = import.meta.env.VITE_BASE_URL;

// * 请求响应参数(不包含data)
export interface Result {
    code: string;
    msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
    data?: T;
}

const config = {
    // 默认地址
    baseURL,
    // 设置超时时间（10s）
    timeout: 15000,
};

class RequestHttp {
    service: AxiosInstance;
    public constructor(config: AxiosRequestConfig) {
        // 实例化axios
        this.service = axios.create(config);

        /**
         * @description 请求拦截器
         */
        this.service.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                // 进度条
                NProgress.start();
                // const token: string = token;
                // 请求头
                return { ...config, headers: { Authorization: localStorage.getItem('token') as string } };
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            }
        );

        /**
         * @description 响应拦截器
         */
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                // 关闭 进度条
                NProgress.done();
                const { data } = response;

                // * 成功请求
                return data;
            },
            async (error: AxiosError) => {
                // 关闭 进度条
                NProgress.done();

                // 错误提示
                ElMessage.error(error.message)
                return Promise.reject(error);
            }
        );
    }

    // * 常用请求方法封装
    get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
        return this.service.get(url, { params, ..._object });
    }
    post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
        return this.service.post(url, params, _object);
    }
    put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
        return this.service.put(url, params, _object);
    }
    delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
        return this.service.delete(url, { params, ..._object });
    }
}


export default new RequestHttp(config);