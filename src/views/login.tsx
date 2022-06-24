import { LoginData } from '@/api/modules/login';
import { ElButton, ElForm, ElFormItem, ElInput, ElCheckbox, FormInstance, FormRules } from 'element-plus';
import { defineComponent, reactive, ref, h } from 'vue';
export const Login = defineComponent({
    setup() {
        console.log(123);
        const loginFormRef = ref<FormInstance>()
        const loginRules = reactive<FormRules>({
            userName: [{ required: true, trigger: "change", message: "用户名不能为空" }],
            passwords: [{ required: true, trigger: "change", message: "密码不能为空" }],
        })
        // 表单
        const loginForm: LoginData = reactive({ userName: "lanya", passwords: "1234", rememberMe: false });


        return () => <div class="login">asdasdasdasd
            <ElForm ref="loginFormRef" model={loginFormRef} rules={loginRules} class="login-form">
                <h3 class="title">登录</h3>
                <ElFormItem prop="userName">
                    <ElInput type="text" auto-complete="off" placeholder="账号">
                    </ElInput>
                </ElFormItem>
                <ElFormItem prop="passwords">
                    <ElInput type="password" auto-complete="off" placeholder="密码">
                    </ElInput>
                </ElFormItem>
                <ElCheckbox style="margin:0px 0px 25px 0px;">记住密码</ElCheckbox>
                <ElFormItem style="width:100%;">
                    <ElButton loading={true} size={"small"} type="primary" style="width:100%;">
                        <span>登 录</span>
                        <span>登 录 中...</span>
                    </ElButton>
                </ElFormItem>
            </ElForm >
            <div class="el-login-footer">
                <span>Copyright © 2018-2022 FaiSystem All Rights Reserved.</span>
            </div>
        </div >

    }
})