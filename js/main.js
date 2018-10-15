$(document).ready(function($) {
  var listItems = $("#work ul li");
  listItems.each(function(i, li) {
    var gradients = [
                     "linear-gradient(to right, #41295a, #2f0743)",
                     "linear-gradient(to left, #ed213a, #93291e)",
                     "linear-gradient(to right, #06beb6, #48b1bf)",
                     "linear-gradient(to left, #00d2ff , #3a7bd5)",
                     "linear-gradient(5deg, #036564, #033649)",
                     "linear-gradient(to left, #F09819 , #EDDE5D)",
                     "linear-gradient(to left, #EB3349 , #F45C43)",
                     "linear-gradient(to right, #FF512F , #F09819)",
                     "linear-gradient(to left, #EC6F66 , #F3A183)",
                     "linear-gradient(to left, #ADD100 , #7B920A)"
                   ];
    $(li).css('background', gradients[i])
  });

  $('.banner_btn').on('click', function(){
    if($(this).val == 'msft'){
      $(".overlay, #microsoft_ad").show();
    }
    if($(this).val == 'ssga'){
      $(".overlay, #ssga_ad").show();
    }
  });

  $(".banner i, .overlay").on('click',function(){
    $(".banner").each().hide();
  })
});
