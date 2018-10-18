// pages/vocabulary-learn-incognize/vocabulary-learn-incognize.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onNext: function (event) {
        console.log("onNext");
        wx.redirectTo({
            url: '../vocabulary-learn-index/vocabulary-learn-index',
        })
    }
})