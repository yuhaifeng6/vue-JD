<template>
  <div class='login'>
    <cube-form
        :model="model"
        :schema="schema"
        @submit="submitHandler">
    </cube-form>
  </div>
</template>

<script>
export default {
name: 'login',
  data(){
    return {
        model: {
            username: "",
            password: ""
        },
        schema: {
            fields: [
                // 用户名
                {
                    type: "input",
                    modelKey: "username",
                    label: "用户名",
                    props: {
                        placeholder: "请输入用户名",
                    },
                    rules: {
                        // 校验规则
                        required: true,
                        type: "string",
                        min: 3,
                        max: 15,
                    },
                    trigger: "blur",
                    messages: {
                        required: "用户名不能为空",
                        min: "用户名不能小于3个字符",
                        max: "用户名不能大于15个字符"
                    }
                },
                // 密码
                {
                    type: "input",
                    modelKey: "password",
                    label: "密码",
                    props: {
                        placeholder: "请输入密码",
                        type: "password",
                        eye: {
                            open: false,
                        }
                    },
                    rules: {
                        required: true,
                    },
                    trigger: "blur",
                },
                {
                    type: "submit",
                    label: "登录"
                }
            ]
        }
    };
  },

  methods: {
      async submitHandler(e){
          e.preventDefault();
          try {
            const result = await this.$http.get("/api/login", {params: this.model})
            console.log("登录返回结果", result)
            if (result.code == 0) {
              this.$store.commit("setToken", result.token)
              window.localStorage.setItem("token", result.token)
              // 判断路由是否带参，带参就去到参数指向的地址
              if (this.$route.query.redirect) {
                this.$router.replace({path: this.$route.query.redirect})
              } else {
                this.$router.replace({path: '/botnav'})
              }
            } else {
              alert(result.message)
            }
          } catch (error) {
            console.log(error)
          }
          
      }
  },

}

</script>
<style lang='scss' scoped>
.login{
  padding-top: 30px;
}
</style>