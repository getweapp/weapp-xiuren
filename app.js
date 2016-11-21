//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    let types = wx.getStorageSync("types");
    if(!types){
      wx.setStorageSync("types", this.globalData.types);
    }
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    api:{
      listBaseUrl:"https://api.getweapp.com/thirdparty/xiuren?type=",
      albumBaseurl:"https://api.getweapp.com/thirdparty/xiuren/show?id=",
    },
    currentType:'',
    types:[
      {
        title:"比基尼",
        value:"bijini",
        is_show:true
      },
      {
        title:"制服",
        value:"zhifu",
        is_show:true
      },
      {
        title:"写真艺术",
        value:"nvyou",
        is_show:true
      },
      {
        title:"性格美女",
        value:"xingge",
        is_show:true
      },
      {
        title:"美女车展",
        value:"rufang",
        is_show:true
      },
      {
        title:"av演员",
        value:"av",
        is_show:true
      },
      {
        title:"丝袜",
        value:"siwa",
        is_show:true
      },
      {
        title:"裙装",
        value:"qunzhuang",
        is_show:true
      },
      {
        title:"情趣",
        value:"qingqu",
        is_show:true
      },
    ]
  },
  
})