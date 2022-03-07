if ($('input[name="conyuge_dependiente-cat_ambitos_laborales"]:checked').val() == 4 || $('input[name="conyuge_dependiente-cat_ambitos_laborales"]:checked').val() == 3){
    $("#id_pareja-dependiente_container_trabajo").hide();
}
$("#id_var-cat_pais option[value='251']").each(function() {
    $(this).remove();
});
$("#id_var-nacionalidades option[value='251']").each(function() {
    $(this).remove();
});
module.exports.checkBoxText = function(value, name, other, active) {
    if (active) {
        $("#" + other).prop("readonly", false);
        $("#" + other).prop("required", true);
        $("#" + other).focus();
        if (name == 'conyuge_dependiente-cat_ambitos_laborales' && value == 4) {
            $("#id_conyuge-dependiente_container_trabajo").show();
            $("#id_pareja-dependiente_container_trabajo").show();
        }else{
            $("#id_conyuge-dependiente_container_trabajo").hide();
            $("#id_pareja-dependiente_container_trabajo").hide();
        }
    } else if (name == "conyuge_dependiente-cat_ambitos_laborales" && value == 3) {
        $("#" + other).prop("readonly", true);
        $("#id_conyuge-dependiente_container_trabajo").hide();
        $("#id_pareja-dependiente_container_trabajo").hide();
    } else if (name == "conyuge_dependiente-cat_ambitos_laborales" && value != 3) {
        $("#" + other).prop("readonly", true);
        $("#id_conyuge-dependiente_container_trabajo").show();
        $("#id_pareja-dependiente_container_trabajo").show();
        if (value == 1) {
            $('#cat_ordenes_gobierno').show();
        } else if (value == 2) {
            $('#cat_ordenes_gobierno').hide();
        }
    } else if (name == "var-cat_estados_civiles" && value == 1) {
        $("#" + other).prop("readonly", true);
        $("#id_regimen_matrimonial").hide()
    } else if (name == "var-cat_estados_civiles" && value != 1) {
        $("#" + other).prop("readonly", true);
        $("#id_regimen_matrimonial").show()
    } else {
        $("#" + other).prop("readonly", true);
        $("#" + other).prop("required", false);
        $("#" + other).val("");
    }
};
module.exports.checkBoxText2 = function(name, other, active, other2) {
    if (active) {
        $("#" + other).prop("readonly", false);
        $("#" + other).prop("required", true);
        $("#" + other).focus();
    } else {
        $("#" + other).prop("readonly", true);
        $("#" + other).prop("required", false);
        $("#" + other).val("");
    }
    $("#" + other2).val("")
    $("#" + other2).prop("readonly", true);
};
module.exports.radioMx = function(v, id) {
    $("#" + id + " option[value='152']").each(function() {
        $(this).remove();
    });
    $("#" + id + " option[value='251']").each(function() {
        $(this).remove();
    });
    if (v == 1) { // Si se selecciona México
        $("#" + id).append("<option value='152'></option>");
        $("#" + id).val(152);
        $("#" + id + "_container").hide();
        $("#" + id + "_container_direccion").show();
        $("." + id + "_nacional").show();
        $("#" + id + "_container_municipio").hide();
        $("#" + id + "_container_cp").hide();
        $("#" + id + "_container_codigo_postal").show();
        $("." + id + "_extranjero").hide();
        $("#" + id.replace('cat_pais', 'municipio')).attr('placeholder', 'Municipio');
        $("#" + id.replace('cat_pais', 'colonia')).attr('placeholder', 'Colonia');
        $("#" + id + "_container_estado").show();
        $('#id_cat_entidades_federativas').val(null).trigger('change');
        let cp = document.getElementById('id_domicilio-cp');
        if(cp){
            cp.value = '';
        }
        // $('#id_copropietario-rfc_container').show();
    } else if (v == 2) { // Si es extranjero
        $("#" + id + "_container").show();
        $("#" + id + "_container_direccion").show();
        $("#" + id + "_container_cp").show();
        $("#" + id + "_container_municipio").show();
        $("#" + id + "_container_codigo_postal").hide();
        $("." + id + "_nacional").hide();
        $("." + id + "_extranjero").show();
        $("#" + id + "_container_estado").hide();
        $("#" + id.replace('cat_pais', 'municipio')).attr('placeholder', 'Ciudad');
        $("#" + id.replace('cat_pais', 'colonia')).attr('placeholder', 'Estado');
        // $('#id_copropietario-rfc_container').hide();
    } else { // Si es otro
        $("#" + id).append("<option value='251'></option>");
        $("#" + id).val(251);
        $("#" + id + "_container_cp").show();
        $("#" + id + "_container").hide();
        $("#" + id + "_container_codigo_postal").hide();
        $("#" + id + "_container_direccion").hide();
        $("." + id + "_nacional").hide();
        $("." + id + "_extranjero").hide();
        $("#" + id + "_container_estado").hide();
        $("#" + id.replace('cat_pais', 'municipio')).attr('placeholder', 'Municipio');
        $("#" + id.replace('cat_pais', 'colonia')).attr('placeholder', 'Colonia');
    }
};
module.exports.radioSiNo = function(v, id) {
    if (v == 'False') {
        $("#" + id + "_container_servidor").show()
    } else {
        $("#" + id + "_container_servidor").hide()
    }
};
module.exports.radioUnica = function(id) {
    if (id == 'id-frecuencia-container') {
        $("#id-frecuencia-container").show()
        $("#id-unica-container").hide()
    } else {
        $("#id-frecuencia-container").hide()
        $("#id-unica-container").show()
    }
};
module.exports.radioTPersona = function(v, id) {
    var valida_rfc = (rfc, es_f) => {
        if (es_f) {
            $(rfc).val(rfc.value.toUpperCase());
            let re = /^([A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z|\d]{3}))$/;
            if (re.test($(rfc).val())) {
                $(rfc).removeClass("is-invalid");
                $(rfc).next().remove();
                $(rfc).parent().parent().find('h5').remove();
            } else {
                if ($(rfc).parent().find(".invalid-feedback").length == 0) {
                    $(rfc).addClass("is-invalid");
                    $(rfc).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                    $(rfc).parent().parent().append('<h5 class="text-justify mt-1" id="textHelpRfcGeneric">En caso de que no se cuente con la clave en el RFC, se consignará la clave genérica en el RFC: XEXX010101000 y cuando se trate de operaciones efectuadas con residentes en el extranjero, que no se encuentren inscritos en el RFC, se señalará la clave genérica en el RFC: XEXX010101000.</h5>');
                }
            }
        }else{
            $(rfc).val(rfc.value.toUpperCase());
            let re = /^([A-Z,Ñ,&]{3}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z|\d]{3}))$/;
            if (re.test($(rfc).val())) {
                $(rfc).removeClass("is-invalid");
                $(rfc).next().remove();
                $(rfc).parent().parent().find('h5').remove();
            } else {
                if ($(rfc).parent().find(".invalid-feedback").length == 0) {
                    $(rfc).addClass("is-invalid");
                    $(rfc).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                    $(rfc).parent().parent().append('<h5 class="text-justify mt-1" id="textHelpRfcGeneric">En caso de que no se cuente con la clave en el RFC, se consignará la clave genérica en el RFC: XEXX010101000 y cuando se trate de operaciones efectuadas con residentes en el extranjero, que no se encuentren inscritos en el RFC, se señalará la clave genérica en el RFC: XEXX010101000.</h5>');
                }
            }
        }
    }
    var _rfc = id.replace('es_fisica', 'rfc');
    var events = ['input', 'click'];
    if (v == 'true') {
        $("#id_" + id + "_container_fisica").show();
        $("#id_" + id + "_container_moral").hide();
        events.forEach((event) => {
            let rfc = document.getElementsByName(_rfc)[0];
            let es_f = true;
            rfc.addEventListener(event, valida_rfc.bind(this, rfc, es_f), true);
        });
        if($('#titular').length && id === 'propietario_anterior-es_fisica' || $('#titular').length && id === 'var-es_fisica'){
            $('#titular').show();
        }
    } else {
        $("#id_" + id + "_container_fisica").hide();
        $("#id_" + id + "_container_moral").show();
        events.forEach((event) => {
            let rfc = document.getElementsByName(_rfc)[0];
            let es_f = false;
            rfc.addEventListener(event, valida_rfc.bind(this, rfc, es_f), true);
        });
        if($('#titular').length && id === 'propietario_anterior-es_fisica' || $('#titular').length && id === 'var-es_fisica'){
            $('#titular').hide();
            $('#id_bienes_personas-tipo_relacion').val(null).trigger('change');
            $('input[name=bienes_personas-otra_relacion]').parent().parent().hide();
            $('#id_beneficios_especie-cat_tipos_relaciones_personales').val(null).trigger('change');
            $('input[name=beneficios_especie-cat_tipos_relaciones_personales]').parent().parent().hide();
        }
    }
};
module.exports.borrarRegistro = function(url, redirect, id) {
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    function csrfSafeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
    if (confirm('¿Está seguro de eliminar el registro?') == true) {
        $.ajax({
            url: url,
            type: "POST",
            success: function(json) {
                $("#borrar-registro-" + id).hide()
                if (redirect){
                    window.location.href = redirect
                }
            },
            error: function(xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText);
            }
        });
    } else {
        return false;
    }
};
module.exports.borraUsuario = function(url, form, reload) {
    var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
    function csrfSafeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
    $.ajax({
        url: url.replace('0', $("#id-usuario").val()),
        type: "POST",
        data: $("#" + form).serialize(),
        success: function(json) {
            if (reload === true) {
                $("#id-usuario-" + $("#id-usuario").val()).remove();
                $("#id-usuario").val("")
                $("#nombre-usuario").html("")
                $("#modal").modal('hide');
            } else {
                window.location.href = reload;
            }
        },
        error: function(xhr, errmsg, err) {}
    });
};