// pages/vocabulary-grouptest/vocabulary-grouptest.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    onReview: function (event) {
        console.log("onReciew");
        wx.redirectTo({
            url: '../vocabulary-learn-index/vocabulary-learn-index',
        })
    },
    onGroupTest: function (event) {
        console.log("onGroupTest");
        wx.redirectTo({
            url: '../vocabulary-test-detail/vocabulary-test-detail',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    }
})