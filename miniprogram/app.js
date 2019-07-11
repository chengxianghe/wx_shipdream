//app.js
App({
  globalData: {
    userInfo: null,
    age: 17,
    appid: '1wqas2342dasaqwe232342xxxxxxxxxx', //appid需自己提供，此处的appid我随机编写  
    secret: 'e0dassdadef2424234209bwXXXXXXXXXXXXXX', //secret需自己提供，此处的secret我随机编写 
    openid: '你好', //自定义
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function(options) {
    //网络请求
    console.log("onLaunch 小程序初始化完成")

    // 获取用户信息
    this.getUserInfo();

    // wx.request({
    //   url: '',
    // })
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'develop-riq0t',
        traceUser: true,
      })
    }
  },

  //获取用户信息
  getUserInfo: function(cb) {
    var that = this
    wx.login({
      success: function() {
        wx.getUserInfo({
          success: function(res) {
            that.globalData.userInfo = res.userInfo
            console.log(res.userInfo);
            typeof cb == "function" && cb(that.globalData.userInfo)
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    console.log("onShow 小程序启动，或从后台进入前台显示")

    console.log(options)
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }

    //2.获取用户的信息，存到自己的服务器
    // //即将废弃
    // wx.getUserInfo({
    //   withCredentials: true,
    //   lang: '',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })


  },

  /**
   * 当小程序从前台进入后台，会触发 onHide 一般存活2h
   */
  onHide: function() {
    console.log("onHide 小程序从前台进入后台")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }

})