 var requestNewData = function(that){
        wx.showToast({
            title: 'loading...',
            icon: 'loading'
        }),
        wx.request({
          url: 'https://japi.juhe.cn/joke/content/text.from',
          data: {
              pagesize:20,
              key: 'ec0c963e46c0f145e00ba4ae1fe73bef'
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            //wx.stopPullDownRefresh(),
            that.stopPullDownRefresh(),
            console.info(res.data),
            //()=>setData({data:res.data})
          that.setData({data:res.data})
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
        data:[]
    },
    onLoad(){
        const that = this
        requestNewData(that)
    }
,
    onPullDownRefresh (){
       const that = this
        requestNewData(that)
    },
    stopPullDownRefresh (){
        wx.stopPullDownRefresh({
            complete: function(){
                wx.hideToast()
            }
        })
    }
})