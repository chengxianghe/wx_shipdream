// miniprogram/pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 5,
        unique: 'unique_5'
      },
      {
        id: 4,
        unique: 'unique_4'
      },
      {
        id: 3,
        unique: 'unique_3'
      },
      {
        id: 2,
        unique: 'unique_2'
      },
      {
        id: 1,
        unique: 'unique_1'
      },
      {
        id: 0,
        unique: 'unique_0'
      }
    ],

    groups: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this
    wx.request({
      url: 'https://api.douban.com/v2/fm/app_channels?alt=json&apikey=02646d3fb69a52ff072d47bf23cef8fd&app_name=radio_iphone&client=s%3Amobile%7Cy%3AiOS%2010.2%7Cf%3A115%7Cd%3Ab88146214e19b8a8244c9bc0e2789da68955234d%7Ce%3AiPhone7%2C1%7Cm%3Aappstore&douban_udid=b635779c65b816b13b330b68921c0f8edc049590&icon_cate=xlarge&udid=b88146214e19b8a8244c9bc0e2789da68955234d&version=115',
      success(res) {
        console.log(res.data)
        const data = res.data.groups
        that.setData({
          groups: data
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  },

  handleImageTap: function() {
    console.log("图片被点击了")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // /**
  //  * 监听页面滚动
  //  * 注意：请只在需要的时候才在 page 中定义此方法，不要定义空方法
  //  */
  // onPageScroll(obj) {
  //   // scrollTop	Number	页面在垂直方向已滚动的距离（单位px）
  //   console.log(obj)
  // },

  /**
   * 监听用户上拉触底事件
   */
  onReachBottom() {
    console.log("监听用户上拉触底事件")
  },

  /**
   * 监听用户下拉刷新事件
   */
  onPullDownRefresh() {
    console.log("监听用户下拉刷新事件")
  },

  /**
   * 点击 tab 时触发
   */
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)

    wx.pageScrollTo({
      scrollTop: 0,
    })
  }
})