$('.spoiler').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideDown(2000);
});

$(".spoiler2").hide();

$(".spoilerButton2").on("click", function(){
  $(".spoilerButton2").hide();
  $(".spoiler2").slideDown(2000);
});