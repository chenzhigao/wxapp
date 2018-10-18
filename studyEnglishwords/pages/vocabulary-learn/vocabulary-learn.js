// pages/vocabulary-learn/vocabulary-learn.js
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
    
    /**
     * 开始背单词
     */
    onRecitewords: function (event) {
        wx.navigateTo({
            url: "../vocabulary-learn-index/vocabulary-learn-index"
        });
    }
})