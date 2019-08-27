import axios from 'axios'
import store from './store'
import router from './router';


// http的全局拦截
// token要放在请求头（header）上，带回去给后端


export default function setAxios() {
    // 请求拦截，把token给携带给后端
    axios.interceptors.request.use(
        config=>{
            if (store.state.token) {
                config.headers.token = store.state.token
            }
            return config
        }
    )
    // 每次请求有返回的，都是经过这个拦截的
    axios.interceptors.response.use(
        response=>{
            // 判断登录成功
            if (response.status == 200) {
                const data = response.data
                if (data.code == -1) { 
                    //-1说明登录过期重新登录，清除vuex中的token跟localStorage中的token
                    store.commit("setToken", "")
                    localStorage.removeItem("token")
                    //跳转到login页面
                    router.replace({path: "/login"})
                }
                return data
            }
            return response
        }
    )
}