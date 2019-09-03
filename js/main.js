$(document).ready(function($) {
  var listItems = $("#work ul li");
  listItems.each(function(i, li) {
    var gradients = [
                     "linear-gradient(to right, #396afc, #2948ff)",
                     "linear-gradient(to right, #41295a, #2f0743)",
                     "linear-gradient(to left, #ed213a, #93291e)",
                     "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,192,0,1) 0%, rgba(246,214,0,1) 62.5% )",
                     "linear-gradient(to right, #a8e063, #56ab2f)",
                     "linear-gradient(to right, #06beb6, #48b1bf)",
                     "linear-gradient(to left, #00d2ff , #3a7bd5)",
                     "linear-gradient(5deg, #036564, #033649)",
                     "linear-gradient(to right, #bbd2c5, #536976)",
                     "linear-gradient(to left, #F09819 , #EDDE5D)",
                     "linear-gradient(to left, #EB3349 , #F45C43)",
                     "linear-gradient(to right, #FF512F , #F09819)",
                     "linear-gradient(to left, #EC6F66 , #F3A183)",
                     "linear-gradient(to left, #eacda3, #d6ae7b)",
                     "linear-gradient(to left, #ADD100 , #7B920A)"
                   ];
    $(li).css('background', gradients[i])
  });
});
