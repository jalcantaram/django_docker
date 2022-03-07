$(document).ready(function() {
  // var position_1 = document.body.clientHeight - window.scrollY - window.innerHeight
  // if (position_1 > 120) {
  //   $('.print-button').css({
  //     bottom: '20px',
  //   });
  // } else {
  //   $('.print-button').css({
  //     bottom: (120 - position_1) + 'px',
  //   });
  // }
  // window.onscroll = function() {
  //   var position = document.body.clientHeight - window.scrollY - window.innerHeight
  //   if (position > 120) {
  //     $('.print-button').css({
  //       bottom: '20px',
  //     });
  //   } else {
  //     $('.print-button').css({
  //       position: 'initial'
  //     });
  //   }
  // }

  $(".imprimir-pagina").click(function() {
    window.print()
  })
})
