//app.js
App({

  onLaunch: function () {
    wx.loadFontFace({
      family: "Circular Black",
      source: 'url("https://cloud-minapp-13908.cloud.ifanrusercontent.com/1gqb9L1kfJbwLQAt.ttf")',
      global: true,
      success: (res) => console.log(res)
    })
  }
})