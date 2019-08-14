<template>
  <div class='register'>
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
            if (result.data.code == 0) {
              alert(result.data.message)
            } else {
              alert(result.data.message)
            }
          } catch (error) {
            console.log(error)
          }
          
      }
  },

}

</script>
<style lang='scss' scoped>
</style>