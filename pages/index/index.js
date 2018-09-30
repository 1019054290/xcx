//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=514189713,1292245534&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1063282716,963145649&fm=27&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188602516,4034624760&fm=200&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=304807727,3698569685&fm=26&gp=0.jpg'
    ],
    dressAreaList:[{
      name:"样品一",
      imgUrl:"http://image5.suning.cn/b2c/catentries/000000000698644925_2_800x800.jpg"
    },{
        name: "样品二",
        imgUrl:"http://img.11665.com/img1_p3/i4/1080831956/TB25I9chg0kpuFjSspdXXX4YXXa_%21%211080831956.jpg"
      }, {
        name: "样品三",
        imgUrl: "http://image1.suning.cn/uimg/b2c/newcatentries/0070119588-000000000704620312_2_800x800.jpg"
      }, {
        name: "样品四",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=2814141834,2845950074&fm=214&gp=0.jpg"
      }, {
        name: "样品五",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=2784927224,2301970204&fm=26&gp=0.jpg"
      }, {
        name: "样品六",
        imgUrl: "http://img3.imgtn.bdimg.com/it/u=3391722757,1693861698&fm=26&gp=0.jpg"
      }],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
