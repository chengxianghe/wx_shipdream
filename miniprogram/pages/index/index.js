// miniprogram/pages/index/index.js

//getApp()可以获取产生的实例对象
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: getApp().globalData.name,
    age: getApp().globalData.age
  },

  onGetUserInfoPressed: function (event){
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad 页面加载")
    var getAppInfo = app.globalData.openid;
    console.log(getAppInfo)
    app.globalData.age = 19
    console.log(getApp().globalData.age)

    wx.request({
      url: 'http://t.gexiaojie.com/api.php?&output=json&_app_key=f722d367b8a96655c4f3365739d38d85&_app_secret=30248115015ec6c79d3bed2915f9e4cc&c=column&a=indexchoiceV2&pg=0&size=20',
      method: "GET",
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err) 
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady 页面初次渲染完成")

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow 页面显示")

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide 页面隐藏")

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload 页面卸载")

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})