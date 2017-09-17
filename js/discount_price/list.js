//列表渲染数据
$.ajax({
    url: 'http://139.199.192.48:9090/api/getinlanddiscount',
    type: 'get',
    success: function(data) {
        console.log(data)
        var html = template('list_tlp', data.result);
        $('#row_list').html(html);
    }
})