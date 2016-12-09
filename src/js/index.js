$.ajax({
    url: 'mock/data.json',
    type: 'get',
    dataType: 'json',
    data: {param1: 'value1'},
    success:function(data){
        console.log("success");
        console.log(data)
        var html = template('model', {
            data: data
        });
        document.getElementById('goodbox').innerHTML = html;
        $('.bnt').click(function(){
        var newTit='detail.html?'+$(this).data('id');
        window.location.href=newTit;
        console.log($(this).data('id'))
});
    }
})
