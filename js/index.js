// $('.nav_three').on('click', function() {
//     $('#nav_three_row').toggleClass('abc');
// })


//菜单渲染
$.ajax({
    url: 'http://139.199.192.48:9090/api/getindexmenu',
    type: 'get',
    success: function(data) {
        // console.log(data);
        var html = template('menus_tlp', data.result);
        $('.menus_one').append(html);
        //点击显示和隐藏


    }
});


//列表动态渲染
$.ajax({
    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
    type: 'get',
    success: function(data) {
        console.log(data)
        var html = template('link_tlp', data.result);
        $('#media_Form').html(html);
    }
})