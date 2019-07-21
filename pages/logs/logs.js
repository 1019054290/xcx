//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    msg:"我是购物车",
    array: [1, 2, 3, 4, 5],
    logs: [],
    allCheckeds:false,
    allCount:0.00,
    shoppingList:[{
      id:1,imgUrl:"http://img.alicdn.com/bao/uploaded/TB1Vi60XcXIxuRkSRTgXXbWhXXa_!!0-item_pic.jpg_300x300.jpg",
      checked:false,
      price:33833,
      trueOrFalse:0,
      detail:"千纸鹤男装2018春秋季新款男士飞行员休闲夹克秋装棒球服外套男潮"
    }, {
      id:2,
        imgUrl: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1112208168/O1CN012ACzWUZW1yvRZ8j_!!1112208168.jpg_430x430q90.jpg",
      checked: false,
      price: 290,
        trueOrFalse: 0,
        detail: "PINLI品立2018秋季新款男装印花棒球领夹克嘻哈男外套B183404392"
      }, {
        id:3,
        imgUrl: "https://img.alicdn.com/imgextra/i1/1743607907/TB2vb5EJ25TBuNjSspmXXaDRVXa_!!1743607907-0-item_pic.jpg_430x430q90.jpg",
        checked: false,
        price: 138,
        trueOrFalse: 0,
        detail: "日系潮牌嘻哈牛仔衣男宽松夹克个性疯字印花青年原创水洗秋装外套 "
    }, {
        id: 4, imgUrl: "https://gd4.alicdn.com/imgextra/i4/854891617/O1CN011NoctQSkpDtB7Dc_!!854891617.jpg_400x400.jpg",
      checked: false,
      price: 338,
        trueOrFalse: 0,
      detail: "2018ins秋冬季潮牌欧美风街头嘻哈oversize夹克胖子外套冲锋衣男 "
      }, {
        id: 2,
        imgUrl: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1112208168/O1CN012ACzWUZW1yvRZ8j_!!1112208168.jpg_430x430q90.jpg",
        checked: false,
        price: 290,
        trueOrFalse: 0,
        detail: "PINLI品立2018秋季新款男装印花棒球领夹克嘻哈男外套B183404392"
      }, {
        id: 3,
        imgUrl: "https://img.alicdn.com/imgextra/i1/1743607907/TB2vb5EJ25TBuNjSspmXXaDRVXa_!!1743607907-0-item_pic.jpg_430x430q90.jpg",
        checked: false,
        price: 138,
        trueOrFalse: 0,
        detail: "日系潮牌嘻哈牛仔衣男宽松夹克个性疯字印花青年原创水洗秋装外套 "
      }, {
        id: 4, imgUrl: "https://gd4.alicdn.com/imgextra/i4/854891617/O1CN011NoctQSkpDtB7Dc_!!854891617.jpg_400x400.jpg",
        checked: false,
        price: 338,
        trueOrFalse: 0,
        detail: "2018ins秋冬季潮牌欧美风街头嘻哈oversize夹克胖子外套冲锋衣男 "
      }, {
        id: 2,
        imgUrl: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1112208168/O1CN012ACzWUZW1yvRZ8j_!!1112208168.jpg_430x430q90.jpg",
        checked: false,
        price: 290,
        trueOrFalse: 0,
        detail: "PINLI品立2018秋季新款男装印花棒球领夹克嘻哈男外套B183404392"
      }, {
        id: 3,
        imgUrl: "https://img.alicdn.com/imgextra/i1/1743607907/TB2vb5EJ25TBuNjSspmXXaDRVXa_!!1743607907-0-item_pic.jpg_430x430q90.jpg",
        checked: false,
        price: 138,
        trueOrFalse: 0,
        detail: "日系潮牌嘻哈牛仔衣男宽松夹克个性疯字印花青年原创水洗秋装外套 "
      }, {
        id: 4, imgUrl: "https://gd4.alicdn.com/imgextra/i4/854891617/O1CN011NoctQSkpDtB7Dc_!!854891617.jpg_400x400.jpg",
        checked: false,
        price: 338,
        trueOrFalse: 0,
        detail: "2018ins秋冬季潮牌欧美风街头嘻哈oversize夹克胖子外套冲锋衣男 "
      }]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '正在加载中'
    })
    let newList = this.data.shoppingList.reverse()
    setTimeout(() => {
      this.setData({
        shoppingList: newList
      })
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      wx.hideLoading();
    }, 2000)

  },
  //上拉加载
  onReachBottom:function(){
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '正在加载中'
    })
    let newList=[];
    for(var i=0;i<2;i++){
      for( var item of this.data.shoppingList){
        newList.push(item)
      }
    }
    setTimeout(() => {
      this.setData({
        shoppingList: newList
      })
      wx.hideNavigationBarLoading() //完成停止加载
      wx.hideLoading();
    }, 2000)
  },
  lookDetail: function (e){
    let itemDetail=e.currentTarget.dataset.item;
    wx.navigateTo({
      url: "../logsDetail/logsDetail?detail=" + JSON.stringify(itemDetail)
    })
  },
  danxuan:function(e){
    var index=e.currentTarget.dataset.indexs;
    var tof="shoppingList["+index+"].trueOrFalse";
    var tofJian = this.data.shoppingList[index].price;
    console.log(e)
    if (e.detail.value!=""){
     this.setData({
       [tof]:1
     })
      if (this.data.shoppingList[index].trueOrFalse==1){
        this.setData({
          allCount: this.data.allCount + Number(e.detail.value)
        })
     }
    }else{
      this.setData({
        [tof]: 0
      })
      if (this.data.shoppingList[index].trueOrFalse == 0) {
        this.setData({
          allCount: this.data.allCount - tofJian
        })
      }
    }
  },
  allChecked:function(e){
    this.setData({
      allCount: 0
    })
    console.log(e)
    if (e.detail.value == '') {
      for (var i = 0; i < this.data.shoppingList.length; i++) {
        var str = 'shoppingList[' + i + '].checked'
        var trueFalse = 'shoppingList[' + i + '].trueOrFalse'
        this.setData({
          [str]: false,
          [trueFalse]:0
        })
      }
      this.setData({
        allCount: 0
      })
    }
    else {
      var numm = 0;
      for (var i = 0; i < this.data.shoppingList.length; i++) {
        var str = 'shoppingList[' + i + '].checked'
        var trueFalse = 'shoppingList[' + i + '].trueOrFalse'
        numm += this.data.shoppingList[i].price;
        this.setData({
          [str]: true,
          [trueFalse]:1
        })
      }
      this.setData({
        allCount:numm
      })
    }
  },
  settlement:function(){
    var objNew=[];
    for(var i=0;i<this.data.shoppingList.length;i++){
      if(this.data.shoppingList[i].trueOrFalse==1){
        objNew.push(this.data.shoppingList[i])
      }
    }
      wx.showToast({
        title: objNew.length < 1 ? "请选择要结算的商品" : "敬请期待结算界面",
        icon:"none"
      })
  }
})
