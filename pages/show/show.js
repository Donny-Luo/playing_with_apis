
Page({
  data: {
    
  },

  // --- Custom Functions ---
  
  
  requestData: function () {
    
    // -- Add Your Code Here --
    wx.request({
      url: 'https://lab.isaaclin.cn/nCoV/api/area?provinceEng=Guangdong',
      success: (res) =>{
        console.log(res)
        const result = res.data.results[0]
        result.updateTime = new Date(result.updateTime).toLocaleDateString()
        this.setData({result: result})
        
      }
      
    })

  },

  // --- Lifecycle Functions ---
  onLoad: function () {

  },
})