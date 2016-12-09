$.ajax({
    url: 'mock/data.json',
    type: 'get',
    dataType: 'json',
    success:function(data){
        var address=window.location.href;
        var id=window.location.href.split('?')[1];
        //console.log(id);
        $.each(data, function(index, val) {
            console.log(val);
             if(val.id==id){
                var html = template('content',val);
                $('#box').html(html);
             }
        });

        $('.addcar').click(function(){
            addGood(id);
            $('#message').css('animation', 'gocenter 3s linear forwards')
        })

    /*function addGood ( id ) {
        var goodlist = localStorage.getItem( Static.good );
        if ( goodlist ) {
            goodlist = JSON.parse( goodlist );
            goodlist.push( id );
        } else {
            // 购物车没东西
            goodlist = [ id ];
        }
        localStorage.setItem( Static.good, JSON.stringify( goodlist ) );
    }
*/
    var static={
        good:'goodlist'
    }

    function addGood(id){
        var goodlist=localStorage.getItem(static.good);
        if(goodlist){
            goodlist=JSON.parse(goodlist);
            goodlist.push(id);
        }else{
            //没有东西
            goodlist=[id];
        }
        localStorage.setItem(static.good,JSON.stringify(goodlist));
    }





    }
})


