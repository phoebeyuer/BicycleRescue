// pages/index-recordoded/index-recorded.js
Page({
  data: {
    recordedTextOne: "记录完成",
    recordedTextTwo: "恭喜您获得1积分!",
    returnHome: "返回主界面",
    checkPoint: "查看我的积分",
    advOne: "积分兑换",
    advTwo: "各种单车骑车卡等你来领" 
  },
  goToHome: function(){
    console.log("回到主页")
    wx.navigateBack({
      delta: 10
    })
  },
  goToPointPannel: function(){
    console.log("查看积分")
    wx.navigateTo({
      url: '/pages/person/person'
    })
  },
})