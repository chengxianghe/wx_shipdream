// miniprogram/pages/find/find.js
var initData = 'this is first line\nthis is second line'
var extraLine = [];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stringData: "test",
    content: "默认的content"
  },

  add() {
    extraLine.push("skss")
    this.setData({
      stringData: initData + '\n' + extraLine.join('\n')
    })
  },

  remove() {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        stringData: initData + '\n' + extraLine.join('\n')
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },

  changeContent: function() {
    this.setData({
      content: "改变的content"
    })
  }
})