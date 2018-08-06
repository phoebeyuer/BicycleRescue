Page({
  data: {
    indexHelp: "帮助",
    indexRecord: "记录",
    indexPerson: "个人",
  },
  onLoad: function (options) {

  },
  goAddRecord(e) {
    const type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: 'record/record?type=' + type
    });
  }
})