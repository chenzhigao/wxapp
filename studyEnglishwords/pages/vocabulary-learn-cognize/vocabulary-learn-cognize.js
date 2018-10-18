// pages/vocabulary-learn-cognize/vocabulary-learn-cognize.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    /**
     * 认对时触发
     */
    onTrue: function (event) {
        console.log("认对");
        wx.redirectTo({
            url: '../vocabulary-learn-index/vocabulary-learn-index',
        })
    },
    /**
     * 认错时触发
     */
    onFalse: function (event) {
        console.log("认错");
        wx.redirectTo({
            url: '../vocabulary-learn-incognize/vocabulary-learn-incognize',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
})