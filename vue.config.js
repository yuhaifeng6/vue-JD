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
              });

              // 首页轮播图接口
              app.get("/api/getBanner", (req, res)=>{
                res.json({
                  data: [
                    {
                      url: "www.baidu.com",
                      image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg"
                    },
                    {
                      url: "www.baidu.com",
                      image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png"
                    },
                    {
                      url: "www.baidu.com",
                      image: "http://img2.imgtn.bdimg.com/it/u=3715405552,2612840062&fm=214&gp=0.jpg"
                    }
                  ]
                })
              });
              // 滚动分类接口
              app.get("/api/srollinglist", (req, res)=>{
                res.json({
                  data: [
                      [{
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105590110&di=005c59f19ea134079a5a5799a9d11e6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630002828_mPLvk.jpeg",
                        label: "分类一"
                      }],
                      [{
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566700346&di=e1442892672bfeacef4e390ae4535a42&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116161826_JVTFa.png",
                        label: "分类二"
                      }],
                      [{
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      },
                      {
                        url: "www.baidu.com",
                        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566105646254&di=6d7b8590977b3b4cfb60494ac03ab6ce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F16%2F20160216005603_crnRH.jpeg",
                        label: "分类三"
                      }],
                  ]
                })
              });
              //获取分类页的分类接口
              app.get('/api/classify',(req,res)=>{
                switch(req.query.type){
                    case '0':
                    res.json({
                        data:[
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            
                        ]
                    });
                    break;
                    case '1':
                    res.json({
                        data: [
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                        ]
                    });
                    break;
                    case '2':
                    res.json({
                        data: [
                            {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                            {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                            {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                            {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            }
                        ]
                    });
                    break;
                    case '3':
                    res.json({
                        data: [
                            {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                            {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                            {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                            {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                        ]
                    });
                    break;
                    case '4':
                    res.json({
                        data: [
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                        ]
                    });
                    break;
                    case '5':
                    res.json({
                        data: [
                            {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                        ]
                    });
                    break;
                    case '6':
                    res.json({
                        data: [
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                        ]
                    });
                    break;
                }
            });
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
