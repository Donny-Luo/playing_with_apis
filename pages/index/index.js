Page({
  data: {
    title: 'The Covid-19',
    subtitle: '这个小程序可以查询广东省目前新冠肺炎的确诊人数',
    theText: 'We are here for you.'
  },

  // --- Custom Functions ---
  navigateToShow: function () {
    
    // -- Add your WXML code here -- 
    wx.navigateTo({
      url: '../../pages/show/show',
    })

  },

  // --- Lifecycle Functions ---
  onLoad: function () {}
})
