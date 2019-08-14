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
name: 'register',
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
                    label: "注册"
                }
            ]
        }
    };
  },

  methods: {
      submitHandler(e){
          e.preventDefault();
          this.$http.get("/api/register", {params: this.model})
          .then((res)=>{
              if (res.data.success) {
                  console.log("注册成功！")
              } else {
                  console.log("注册失败！")
              }
          })
          .catch((error)=>{
              console.log(error)
          })
      }
  },

}

</script>
<style lang='scss' scoped>
</style>