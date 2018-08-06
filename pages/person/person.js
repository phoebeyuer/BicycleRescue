// pages/person/person.js
Page({
  data: {
    indexHelp: "帮助",
    indexRecord: "记录",
    indexPerson: "个人", 
    personIcon: "",
    personName: "",
    personScore: "",
    barList: [
    {
      message: '我的勋章',
      imgAddr: '/static/img/person/person_btn1.png',
    },
    {
      message: '我的记录',
      imgAddr: '/static/img/person/person_btn2.png',
    },
    ],
    barList2: [
      {
        message: '客服中心',
        imgAddr: '/static/img/person/person_btn3.png',
      },
      {
        message: '关于我们',
        imgAddr: '/static/img/person/person_btn4.png',
      },
      {
        message: '意见反馈',
        imgAddr: '/static/img/person/person_btn5.png',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: (res) => {
        console.log(res.userInfo.nickName);
        console.log(res.userInfo.avatarUrl);
        let nickName = res.userInfo.nickName;
        let iconImage = res.userInfo.avatarUrl;
        this.setData({
          personIcon: iconImage,
          personName: nickName,
          personScore: 25,
        })
      }
    })
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