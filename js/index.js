// $('.nav_three').on('click', function() {
//     $('#nav_three_row').toggleClass('abc');
// })


//菜单渲染
$.ajax({
    url: 'http://139.199.192.48:9090/api/getindexmenu',
    type: 'get',
    success: function(data) {
        console.log(data)
            // console.log(data);
        var html = template('menus_tlp', data.result);
        $('.menus_one').append(html);
        //点击显示和隐藏
        //获取第七个元素      设置一个特殊的样式
        var a_btn = $('.col-xs-3 a').attr('data-id', '7');
        a_btn.on('click', function() {
            $('#nav_three_row>div:nth-last-child(-n+4)').toggle();
        })

    }
});


//列表动态渲染
$.ajax({
    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
    type: 'get',
    success: function(data) {
        // console.log(data)
        var html = template('link_tlp', data.result);
        $('#media_Form').html(html);
    }
})