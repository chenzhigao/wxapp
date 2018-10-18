Component({
    data: {
        radioItems: [
            { name: 'cell standard', value: '0' },
            { name: 'cell standard', value: '1' },
            { name: 'cell standard', value: '2' },            
            { name: 'cell standard', value: '3' }
        ],
    },
    methods: {
        radioChange: function (e) {
            console.log('radio发生change事件，携带value值为：', e.detail.value);

            var radioItems = this.data.radioItems;
            for (var i = 0, len = radioItems.length; i < len; ++i) {
                radioItems[i].checked = radioItems[i].value == e.detail.value;
            }
            this.setData({
                radioItems: radioItems
            });
        },
    }
})