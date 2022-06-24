import axios, { AxiosRequestHeaders } from 'axios';
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const baseURL = import.meta.env.VITE_BASE_URL;

/**
 * 创建axios实例
 */
const axiosInstance = axios.create({
    baseURL,
    timeout: 15000,
});

/**
 * 请求拦截
 */
axiosInstance.interceptors.request.use(
    config => {
        // 进度条
        NProgress.start();

        // 请求头
        config.headers = { Authorization: localStorage.getItem('token') as string };

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


/**
 * 响应拦截
 */
axiosInstance.interceptors.response.use(
    function (response) {
        // 关闭 进度条
        NProgress.done();
        // 对响应数据做点什么
        return response.data;
    },
    function (error) {
        // 关闭 进度条
        NProgress.done();
        // 对响应错误做点什么
        switch (error.response?.status) {
            case 400:
                error.message = '请求错误(400)';
                break;
            case 401:
                error.message = '未授权(401)';
                break;
            case 403:
                error.message = '拒绝访问(403)';
                break;
            case 404:
                error.message = '请求出错(404)';
                break;
            case 408:
                error.message = '请求超时(408)';
                break;
            case 500:
                error.message = '服务器错误(500)';
                break;
            case 501:
                error.message = '服务未实现(501)';
                break;
            case 502:
                error.message = '网络错误(502)';
                break;
            case 503:
                error.message = '服务不可用(503)';
                break;
            case 504:
                error.message = '网络超时(504)';
                break;
            case 505:
                error.message = 'HTTP版本不受支持(505)';
                break;
            default:
                error.message = `连接出错(${error.response?.status})!`;
        }
        // 错误提示
        ElMessage.error(error.message)
        return Promise.reject(error);
    },
);

export default axiosInstance;
export const request = axiosInstance.request;