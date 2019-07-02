// miniprogram/pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      { url: '../../images/banner/banner1.png' },
      { url: '../../images/banner/banner2.png' },
      { url: '../../images/banner/banner3.png' },

    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    routers: [
      {
        text: '我的账户',
        icon: '../../images/mine/mine_account.png',
        url: '../myAccount/myAccount',
      },
      {
        text: '我的合同',
        icon: '../../images/mine/mine_contract.png',
        url: '../myAccount/myAccount',
      },
      {
        text: '浏览记录',
        icon: '../../images/mine/mine_browing.png',
        url: '../myAccount/myAccount',
      },
      {
        text: '我要出租',
        icon: '../../images/mine/mine_lease.png',
        url: '../myAccount/myAccount',
      },
      {
        text: '客服',
        icon: '../../images/mine/mine_customService.png',
        url: '../myAccount/myAccount',
      },
      {
        text: '我的收藏',
        icon: '../../images/mine/mine_collect.png',
        url: '../myAccount/myAccount',
      }
    ] 
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

  }
})