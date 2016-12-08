$('#content').click(function(){
    $('.content-wrapp').toggle();
})
$('.content').click(function(){

    $('#area').html($(this).html());
    $('.content-wrapp').hide();
})
// $('.')
$('.fa-times-circle').click(function(){
    $('.phone-number').hide();
})