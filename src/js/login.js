var flag = {};
function getImgsrc(){
    var src = 'dist/img/pic' + (Math.floor(Math.random()*10)+1) + '.png';
    if(flag[src]){
        return getImgsrc();
    }else{
        flag[src] = src
    }
    return src;
}
function randomInitImg(){
    var allClass = 'r1 r2 r3 r4';
    $('.pass-pic img').each(function(){
        $(this).attr('src',getImgsrc());
        $(this).removeClass().addClass('r' + (Math.floor(Math.random()*4)  +1));
    })
    flag = {};
}
$('.change-pic').click(function(){
    randomInitImg();
})
$('.pass-pic img').click(function(){
    var str = "r1 r2 r3 r4";
    var allClass = str.split(' ');
    for( var i = 0;i < allClass.length;i++){
        if($(this).hasClass(allClass[i])){
            break;
        }
    }
    i++;
    i = i%4;
    $(this).removeClass(str).addClass(allClass[i]);
    var ok = true;
    $('.pass-pic img').each(function(){
        if( $(this).hasClass('r1') == false){
            ok = false;
        }
    })
    if(ok){
            alert("ok");
    }
    
})
randomInitImg()









