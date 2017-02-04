var pageNum = 0;
var requestNewData =function(that){
       wx.showToast({
            title: 'loading...',
            icon: 'loading'
        }),
        wx.request({
          url: 'https://japi.juhe.cn/joke/img/text.from',
          data: {
           
              pagesize:20,
              key: 'ec0c963e46c0f145e00ba4ae1fe73bef'
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            //wx.stopPullDownRefresh(),
            //that.stopPullDownRefresh(),
            console.info(res.data),
            //()=>setData({data:res.data})
          that.setData({data:res.data})

          pageNum ++
           that.setData({
            loadMore:false
        })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
}
Page({
    data:{
        data:[],
        loadMore:false,
           scrollTop : 0,
    scrollHeight:0
    },
    onLoad(){
          //   这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this
     requestNewData(this)
      wx.showNavigationBarLoading()
      wx.getSystemInfo({
          success:function(res){
              console.info(res.windowHeight);
              that.setData({
                  scrollHeight:res.windowHeight
              })
          }
      })
      
    }
,
    onPullDownRefresh (){
      requestNewData(this)
    },
    stopPullDownRefresh (){
        wx.stopPullDownRefresh({
            complete: function(){
                wx.hideToast()
            }
        })
    },
    bindDownLoad(){
        console.info("bindDownLoad>>>>")
        // this.setData({
        //     loadMore:true
        // })
      //  requestNewData(this)
    },
   
})