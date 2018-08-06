Page({
  data: {

  },
  onLoad: function (options) {

  },
  goback() {
    wx.navigateBack();
  },
  //点击确认提交按钮
  uploadMessage: function() {
    wx.navigateTo({
      url: '/pages/index-recorded/index-recorded',
    })
  },
  //点击取消按钮
  cancelUpLoad: function() {
    wx.navigateTo({
      url: '/pages/help/help',
    })
  },
})