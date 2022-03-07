$(document).ready(function() {
  $(".loader").fadeOut("slow");
  $('.custom-file-input').on('change', function() {
    this.nextElementSibling.textContent = this.files[0].name
  })
});
