import http from "../index";

export interface LoginData {
    userName: string,
    passwords: string
    verificationCode?: string
    rememberMe?: boolean
}

interface token {
    token: string
}

// * 用户登录接口
export const loginApi = (params: LoginData) => {
    return http.post<token>(`authcenter/system/authcenter/token/classic`, params);
};
