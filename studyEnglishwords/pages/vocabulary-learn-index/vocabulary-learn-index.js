// pages/vocabulary-learn-detail/vocabulary-learn-detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    
    /**
     * 点击美音触发
     */
    onAmerican: function(event) {
        console.log("播放美音");
    },

    /**
     * 点击英音触发
     */
    onBritish: function(event) {
        console.log("播放英音");
    },
    
    /**
     * 点击认识时触发
     */
    onCognize: function(event){
        console.log("认识");
        wx.redirectTo({
            url: '../vocabulary-learn-cognize/vocabulary-learn-cognize',
        })
    },

    /**
     * 点击不认识时触发
     */
    onIncognize: function(event)
    {
        console.log("不认识");
        wx.redirectTo({
            url: '../vocabulary-learn-incognize/vocabulary-learn-incognize',
        })
    },

    /**
     * 点击拿不准时触发
    */
    onInaccurate: function(event)
    {
        console.log("拿不准");
        wx.redirectTo({
            url: '../vocabulary-learn-inaccurate/vocabulary-learn-inaccurate',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
})