$(function() {
  // $("#id_dependencia").selectize({
  //   persist: false,
  //   create: true
  // });
  $("#id_dependencia").selectize();
  // $('#id_fecha_inicio').val('');
  // $('#id_dependencia')[0].selectize.setValue(null);
  var usr = document.getElementsByName('username')[0];
  if (usr) {
    usr.addEventListener('input', function (e) {
      this.value = this.value.toUpperCase();
    });
  }
  $('#form_reset').on('submit', (ev) => {
    ev.preventDefault();
    if ($("#id_rfc_rs").val() != "") {
      $.ajax({
        method: "POST",
        url: "/password_reset/",
        data: $("#form_reset").serialize()
      }).done(function() {
        $("#ventana-modal").modal('hide');
        $(".modal-backdrop").hide(100);
        $("#modal-recuperar-contrasena").modal('show');
        $("#rec-rfc").find(".invalid-feedback").removeClass("is-invalid")
        $("#rec-rfc").find(".invalid-feedback").remove()

      }).fail(function(res) {
        const resp = res.responseJSON
        const message = resp.message.rfc[0]
        if ($("#rec-rfc").find(".invalid-feedback").length == 0) {
          $("#id_rfc_rs").addClass("is-invalid")
          $("#rec-rfc").append(`<div class=\"invalid-feedback\">${message}</div>`)
        }
      })
    } else {
      $("#id_rfc_rs").focus()
    }
  });
  // NOTIFICAR CAMBIO DE ENTE PÚBLICO VIA AJAX
  $('#cambiar-ente').click(function(evt) {
    $.ajax({
      method: 'POST',
      url: '/declaracion/registro/perfil',
      data: $('#cambioente_form').serialize(),
      beforeSend: function (params) {
        $('#cambioente_form').hide();
        $('#cambiar-ente').attr('disabled', true);
        $('#loading_s .spinner-border').show();
      },
      success: function(response){
        if(response.success){
          $('#cambioente_form')[0].reset();
          $('#cambioente_form').show();
          $('#id_dependencia')[0].selectize.setValue(null);
          $('#id_fecha_inicio').val('');
          $('#cambiar-ente').attr('disabled', true);
          $('#loading_s .spinner-border').hide();
          $("#cambioente-modal").modal('hide');
          $(".modal-backdrop").hide(50);
          $("#modal-cambia-ente").modal('show');
        }
      },
      error: function(response) {
        $('#cambioente_form').show();
        $('#cambiar-ente').removeAttr('disabled');
        $('#loading_s .spinner-border').hide();
        $('#cambioente_form').find('.invalid-feedback').remove();
        $.each(response.responseJSON.error, function (field, error_msg) {
            if ($('#id_'+field).parent().find('.invalid-feedback').length == 0) {
              $('#id_'+field).parent().append('<div class=\"invalid-feedback\">'+error_msg+'</div>')
            }
        });
      }
    });
  });
  // NOTIFICAR CAMBIO DE PUESTO VIA AJAX
  $('#cambiar-puesto').click(function(evt) {
    $.ajax({
      method: 'POST',
      url: '/declaracion/registro/perfil',
      data: $('#cambiopuesto_form').serialize(),
      beforeSend: function (params) {
        $('#cambiopuesto_form').hide();
        $('#cambiar-puesto').attr('disabled', true);
        $('#loading_s .spinner-border').show();
      },
      success: function(response){
        if(response.success){
          $('#cambiopuesto_form')[0].reset();
          $('#cambiopuesto_form').show();
          $('#id_dependencia')[0].selectize.setValue(null);
          $('#id_fecha_inicio').val('');
          $('#cambiar-puesto').attr('disabled', true);
          $('#loading_s .spinner-border').hide();
          $("#cambiopuesto-modal").modal('hide');
          $(".modal-backdrop").hide(50);
          $("#modal-cambia-ente").modal('show');
        }
      },
      error: function(response) {
        $('#cambiopuesto_form').show();
        $('#cambiar-puesto').removeAttr('disabled');
        $('#loading_s .spinner-border').hide();
        $('#cambiopuesto_form').find('.invalid-feedback').remove();
        $.each(response.responseJSON.error, function (field, error_msg) {
            if ($('#id_'+field).parent().find('.invalid-feedback').length == 0) {
              $('#id_'+field).parent().append('<div class=\"invalid-feedback\">'+error_msg+'</div>')
            }
        });
      }
    });
  });
  $('#modal-cambia-ente').on('hidden.bs.modal', function (e) {
    location.reload(); 
  });
});
