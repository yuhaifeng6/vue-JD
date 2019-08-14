module.exports = {
    configureWebpack: {
        devServer: {
            port: 8089, //端口号
            open: true, //启动服务自动打开浏览器
            // Mock数据
            // 每次更改这个配置文件都需要重新启动项目
            before(app){
              // app.get("请求地址", (req, res)=>{
              //   res.json({
              //   })
              // })
              // 注册接口
              // 用户信息池
              let userpoor = [
                {
                  username: "yhf",
                  password: 123456
                },
                {
                  username: "mine",
                  password: 123456
                }
              ]
              // 注册接口
              app.get("/api/register", (req, res)=> {
                const {username, password} = req.query
                const userlength = userpoor.filter(val=>val.username==username).length
                if (userlength > 0) {
                  res.json({
                    success: false,
                    message: "用户已存在"
                  })
                } else {
                  res.json({
                    success: true,
                    message: "注册成功"
                  })
                }
              });
              // 登录接口
              let tokenkey = "yhftoken"
              app.get("/api/login", (req, res)=>{
                const {username, password} = req.query
                if (username == "yhf" && password == 123456 || username == "mine" && password == 123456) {
                  res.json({
                    code: 0,
                    message: "登录成功",
                    token: tokenkey + "-" + username + "-" + (new Date().getTime() + 60*60*1000)                    
                  })
                } else {
                  res.json({
                    code: 1,
                    message: "用户名或密码错误！"
                  })
                }
              })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
