$(document).ready(function() {
    $(".valida_email :input").on('input keyup click', function() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test($(this).val())) {
            $(this).removeClass("is-invalid")
            $(this).next().remove()
        } else {
            if ($(this).parent().find(".invalid-feedback").length == 0) {
                $(this).addClass("is-invalid")
                $(this).parent().append("<div class=\"invalid-feedback\">Introduzca una dirección de correo electrónico válida.</div>")
            }
        }
    });
    $(".valida_rfc_fisica :input").on('input keyup click', function() {
        let re = /^([A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z|\d]{3}))$/;
        $(this).val($(this).val().toUpperCase());
        if (re.test($(this).val())) {
            $(this).removeClass("is-invalid")
            $(this).next().remove()
        } else {
            if ($(this).parent().find(".invalid-feedback").length == 0) {
                $(this).addClass("is-invalid")
                $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>")
            }
        }
    });
    $(".valida_rfc_moral :input").on('input keyup click', function() {
        let re = /^([A-Z,Ñ,&]{3}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z|\d]{3}))$/;
        $(this).val($(this).val().toUpperCase());
        if (re.test($(this).val())) {
            $(this).removeClass("is-invalid")
            $(this).next().remove()
        } else {
            if ($(this).parent().find(".invalid-feedback").length == 0) {
                $(this).addClass("is-invalid")
                $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>")
            }
        }
    });
    $(".valida_curp :input").on('input keyup click', function() {
        let re = /^([A-Z&]|[a-z&]{1})([AEIOUX]|[aeiou]{1})([A-Z&]|[a-z&]{1})([A-Z&]|[a-z&]{1})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([HM]|[hm]{1})([AS|as|BC|bc|BS|bs|CC|cc|CS|cs|CH|ch|CL|cl|CM|cm|DF|df|DG|dg|GT|gt|GR|gr|HG|hg|JC|jc|MC|mc|MN|mn|MS|ms|NT|nt|NL|nl|OC|oc|PL|pl|QT|qt|QR|qr|SP|sp|SL|sl|SR|sr|TC|tc|TS|ts|TL|tl|VZ|vz|YN|yn|ZS|zs|NE|ne]{2})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([A-Z0-9]{2})$/;
        $(this).val($(this).val().toUpperCase());
        if (re.test($(this).val())) {
            $(this).removeClass("is-invalid")
            $(this).next().remove()
        } else {
            if ($(this).parent().find(".invalid-feedback").length == 0) {
                $(this).addClass("is-invalid")
                $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un CURP válido</div>")
            }
        }
    });
    $(".solo_letras :input").on('input keyup click', function() {
        this.value = this.value.replace(/[^a-zA-Z\s\u00f1\u00d1\u00E0-\u00FC\u00C0-\u00DC]/g, '').toUpperCase();
    });
    $(".porcentaje :input").on('input keyup click', function() {
        if (this.value > 100 || this.value < 0) {
            this.value = this.value = '';
        }
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(".porcentaje_99 :input").on('input keyup click', function() {
        // Sólo permite agregar hasta el 99%
        if (this.value >= 100 || this.value < 0) {
            this.value = this.value = '';
        }
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(".solo_numeros :input").on('input keyup click', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $(".numeros_letras :input").on('input keyup click', function() {
        this.value = this.value.replace(/[^0-9a-zA-Z]/g, '');
    });
    $(".file_size :input").on('input keyup change', function() {
        try{
            if(this.files[0].size > 2000000){
                if ($(this).parent().find(".invalid-feedback").length == 0) {
                    $(this).addClass("is-invalid")
                    $(this).parent().append('<div class="invalid-feedback">El archivo actual pesa '+ (this.files[0].size/1000/1000).toFixed(1) +'. El tamaño máximo del archivo debe ser de 2MB.</div>')
                }
                this.value = null;
            }else{
                $(this).removeClass("is-invalid")
                $(this).next().remove()
            }
        } catch(e){
            console.log(e)
        }
    });
    $(".valida_anio :input").on('input keyup click', function() {
        this.value = this.value.replace(/^(\d\d)(\d)$/g,'$1/$2').replace(/^(\d\d\/\d\d)(\d+)$/g,'$1/$2').replace(/[^\d\/]/g,'');
        var max_length = 10;
        $(this).attr("maxlength", max_length);
        if ($(this).val().length == max_length) {
            $(this).removeClass("is-invalid");
        } else {
            $(this).addClass("is-invalid");
        }
    });
    $(".valida_telefono :input").on('input keyup click', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        var max_length = 10;
        var min_length = 3;
        $(this).attr("maxlength", max_length);
        if ($(this).val().length <= max_length && $(this).val().length >= min_length) {
            $(this).removeClass("is-invalid")
        } else {
            $(this).addClass("is-invalid")
        }
    });
    function validaCp() {
        // Si no es mexicano permite alfanumericos
        if (document.querySelectorAll('.pais-rmx')[0].checked) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }

        var max_length = 5;
        $(this).attr("maxlength", max_length);
        if ($(this).val().length == max_length) {
            $(this).removeClass("is-invalid")
        } else {
            $(this).addClass("is-invalid")
        }
    }
    $(".valida_cp :input").on('input keyup click', validaCp);

    $(".valida_password :input").keyup(function() {
        max_length = 12;
        expresion_regular = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}]{8,12}";
        $(this).val($(this).val().toUpperCase());
        $(this).attr("maxlength", max_length);
        if ($(this).val().match(expresion_regular) && $(this).val().length >= 8) {
            $(this).removeClass("is-invalid")
        } else {
            $(this).addClass("is-invalid")
        }
    });
    $(".valida_domicilio :input").on('input keyup click', function() {
        this.value = this.value.replace(/[^0-9a-zA-Z.-_ ]/g, '');
    });
    $(".entidad select").each(function() {
        let val = $(this).val();
        if (val == "" || val == "-1" || val == undefined) {
            $(this).val(9);
        }
    });
    $(".extranjero-w").hide();
    $(".pais select").each(function() {
        let val = $(this).val();
        if ((val == "" || val == "-1" || val == undefined || val == 152) && val != 251) {
            $(this).val(152);
            $("#id-" + $(this).attr('name') + "-mx").click();
            $("#id_" + $(this).attr('name') + "_container").hide()
        } else if (val == 251) {
            $("#id-" + $(this).attr('name') + "-uk").click();
            $("#id_" + $(this).attr('name') + "_container").hide()
            $("#id_" + $(this).attr('name') + "_container_direccion").hide()
        } else {
            $("#id-" + $(this).attr('name') + "-ex").change();
        }
    });
    $(".moneda select").each(function() {
        let val = $(this).val();
        if (val == "" || val == "-1" || val == undefined || val == 101) {
            $(this).val(101);
            $("#id-" + $(this).attr('name') + "-mx").click();
            $("#id_" + $(this).attr('name') + "_container").hide()
        }
    });
    var SumaM = $(".m input");
    if (SumaM) {
        SumaM.each(function() {
            var total = $(".m input").toArray().reduce(function(tot, record) {
                let res = $(record).val();
                res = parseFloat(res);
                if (isNaN(res)) {
                    res = 0
                }
                return tot + res;
            }, 0);
            $("#s2").val(total)
            $(".i input").change()
        });
    }
    var SumaI = $(".i input");
    if (SumaI) {
        SumaI.each(function() {
            var total = $(".i input").toArray().reduce(function(tot, record) {
                let res = $(record).val();
                let imn = $('#s2').val() ? $('#s2').val() : 0;
                res = parseFloat(res);
                imn = parseFloat(imn);
                if (isNaN(res)) {
                  res = 0
              }
              return tot + res + imn;
          }, 0);

            $("#s3").val(total);
        });
    }
    var SumaN = $(".n input");
    if (SumaN) {
        SumaN.each(function() {
            var total = $(".n input").toArray().reduce(function(tot, record) {
                let res = $(record).val();
                res = parseFloat(res);
                if (isNaN(res)) {
                  res = 0
              }
              return tot + res;
        }, 0);
            $("#s4").val(total)
            $(".i input").change()
        });
    }
    $(".tipo_persona :checked").change()
    $("#id_puesto").selectize();
    $("#modal-aviso-declaracion-activa").modal('show', {
        backdrop: 'static',
        keyboard: false
    });
    $("#modal-recuperar-declaracion").modal('show', {
        backdrop: 'static',
        keyboard: false
    });
    $(".m input").keyup(function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        var total = $(".m input").toArray().reduce(function(tot, record) {
            let res = $(record).val();
            res = parseFloat(res);
            if (isNaN(res)) {
                res = 0
            }
            return tot + res;
        }, 0);

        $("#s2").val(total)
        $(".i input").change()
    });
    $(".i input").keyup(function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        var total = $(".i input").toArray().reduce(function(tot, record) {
            let res = $(record).val();
            let imn = $('#s2').val() ? $('#s2').val() : 0;
            res = parseFloat(res);
            if (isNaN(res)) {
                res = 0
            }
            return parseFloat(tot) + parseFloat(res) + parseFloat($("#s2").val());
        }, 0);
        $("#s3").val(total)
    });
    $(".m input").keyup(function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        var total = $(".i input").toArray().reduce(function(tot, record) {
            let res = $(record).val();
            res = parseFloat(res);
            if (isNaN(res)) {
                res = 0
            }
            return parseFloat(tot) + parseFloat(res) + parseFloat($("#s2").val());
        }, 0);
        $("#s3").val(total);
    });
    $(".n input, .m input, .i input").keyup(function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        var total = $(".n input").toArray().reduce(function(tot, record) {
            let res = $(record).val();
            res = parseFloat(res);
            if (isNaN(res)) {
                res = 0
            }
            return tot + res;
        }, 0);
        $("#s4").val(total)
        $(".i input").change()
    });
    var ambitosLaborales = $('input[name="conyuge_dependiente-cat_ambitos_laborales"]')
    if (ambitosLaborales) {
        ambitosLaborales.each(function() {
            if (this.checked && $(this).val() == 3) {
                $("#id_conyuge-dependiente_container_trabajo").hide()
                $("#id_pareja-dependiente_container_trabajo").hide()
            }
            if (this.checked && $(this).val() == 4) {
                $("#id_conyuge-dependiente_container_trabajo").show()
                $("#id_pareja-dependiente_container_trabajo").show()
            }
        });
    }
    if($('#membresia_form-renumeracion-si').is(':checked')) {
        $("#remuneracionMonto").show();
    } else {
        $("#remuneracionMonto").hide();
    }
    $('#membresia_form-renumeracion-si').change(() => {
        $("#remuneracionMonto").show();
    });
    $('#membresia_form-renumeracion-no').change(() => {
        $("#remuneracionMonto").hide();
        $("#remuneracionMonto input").val('');
    });
    // $("input[name='empresas_sociedades-actividad_economica']").change(function() {
    //     if ($('#empresas_sociedades-actividad_economica-no').is(':checked')) {
    //         $(".monto-neto").hide();
    //     } else {
    //         $(".monto-neto").show();
    //     }
    // });
    $("input[name='membresia_form-actividad_economica']").change(function() {
        if ($('#membresia_form-actividad_economica-no').is(':checked')) {
            $(".monto-neto").hide();
        } else {
            $(".monto-neto").show();
        }
        if ($('#membresia_form-actividad_economica-no').is(':checked')) {
            $(".membresia-monto-neto").hide();
        } else {
            $(".membresia-monto-neto").show();
        }
    });
    // IF DATOS PAREJA IS EXTRANJERO
    if($('input[name=conyuge_dependiente-ciudadanoExtranjero]:checked').val() === 'true' && $('input[name=conyuge_dependiente-ciudadanoExtranjero]:checked')[0].checked){
        $('#id_var-curp').parent().parent().parent().hide();
    } else {
        $('#id_var-curp').parent().parent().parent().show();
    }
    $('input[name=conyuge_dependiente-ciudadanoExtranjero]').change(function() {
        if($(this).val() === 'true'){
            $('#id_var-curp').parent().parent().parent().hide();
        } else if ($(this).val() === 'false') {
            $('#id_var-curp').parent().parent().parent().show();
        }
    });
    // IF ESTATUS SHOW OR HIDE DOCUMENTO OBTENIDO
    if($('select[name=datos_curriculares-cat_estatus_estudios]').length){
        showHideDocObtenido($('select[name=datos_curriculares-cat_estatus_estudios] option:selected').val());
        $('select[name=datos_curriculares-cat_estatus_estudios]').change(function(){
            showHideDocObtenido($(this).val());
        });
    }
    function showHideDocObtenido(val_s){
        switch (val_s) {
            case '':
                $('select[name=datos_curriculares-cat_documentos_obtenidos]').parent().parent().hide();
                $('input[name=datos_curriculares-conclusion]').parent().parent().parent().parent().hide();
                if($('#id_datos_curriculares-conclusion').data('DateTimePicker')){
                    $('#id_datos_curriculares-conclusion').data('DateTimePicker').maxDate(new Date());
                }
                break;
            case '1':
                $('select[name=datos_curriculares-cat_documentos_obtenidos]').parent().parent().hide();
                $('input[name=datos_curriculares-conclusion]').parent().parent().parent().parent().hide();
                if($('#id_datos_curriculares-conclusion').data('DateTimePicker')){
                    $('#id_datos_curriculares-conclusion').data('DateTimePicker').maxDate(false);
                }
                break;
            case '2':
                $('select[name=datos_curriculares-cat_documentos_obtenidos]').parent().parent().show();
                $('input[name=datos_curriculares-conclusion]').parent().parent().parent().parent().show();
                if($('#id_datos_curriculares-conclusion').data('DateTimePicker')){
                    $('#id_datos_curriculares-conclusion').data('DateTimePicker').maxDate(new Date());
                }
                break;
            case '3':
                $('select[name=datos_curriculares-cat_documentos_obtenidos]').parent().parent().hide();
                $('input[name=datos_curriculares-conclusion]').parent().parent().parent().parent().hide();
                if($('#id_datos_curriculares-conclusion').data('DateTimePicker')){
                    $('#id_datos_curriculares-conclusion').data('DateTimePicker').maxDate(new Date());
                }
                break;
        }
    }
    // Función para usarla con el reduce (suma todos los valores)
    function reducer(accumulator, currentValue){
        return parseFloat(accumulator) + parseFloat(currentValue);
    }
    // Convierte una cadena de texto en número (considear si es Nan)
    function toNumber(string) {
        const value = parseFloat(string);
        if (isNaN(value)) {
            return 0
        } else {
            return value
        }
    }
    // Convierte un array de inputs en un array de números(de sus valores)
    function arrayToNumber(array) {
        const arrayNumber = array.map(input => {
            return toNumber(input.value);
        });

        return arrayNumber;
    }
    var sumaTotal1 = document.getElementById('sumaTotal1');
    var sumaTotal2 = document.getElementById('sumaTotal2');
    var sumaTotal3 = document.getElementById('sumaTotal3');
    // Convierte una colección de
    // Calculos para la etapa ¿TE DESEMPEÑASTE COMO SERVIDOR PÚBLICO EN EL AÑO INMEDIATO ANTERIOR?"
    // Se pone a la escuha para los campos a sumar
    $(".suma1 input, .suma2 input, .suma3 input").keyup(function() {
        // Sólo se aceptan valores numéricos
        this.value = this.value.replace(/[^0-9]/g, '');

        // Se hace la suma suma1 (II. OTROS IN...)
        // SUMA DEL II.1 AL II.5
        let inputArray = $('.suma1 input').toArray()
        inputArray = arrayToNumber(inputArray);
        const total = inputArray.reduce(reducer);
        sumaTotal1.value = total;

        // Se hace la suma de A. INGRE...
        // Suma del numeral I y II
        const suma2 = document.querySelector('.suma2 input')
        sumaTotal2.value = total + toNumber(suma2.value)


        const suma3 = document.querySelector('.suma3 input')
        sumaTotal3.value = toNumber(sumaTotal2.value) + toNumber(suma3.value)
    });
    let inputArray = $('.suma1 input').toArray();
    inputArray = arrayToNumber(inputArray);
    const total = inputArray.length > 0 ? inputArray.reduce(reducer) : 0;
    sumaTotal1 ? sumaTotal1.value = total : '';
    // Se hace la suma de A. INGRE...
    // Suma del numeral I y II
    const suma2 = document.querySelector('.suma2 input');
    if (suma2) {
        sumaTotal2.value = total + toNumber(suma2.value);
    }
    const suma3 = document.querySelector('.suma3 input');
    if (suma3) {
        sumaTotal3.value = toNumber(sumaTotal2.value) + toNumber(suma3.value);
    }
    // VALIDAR CAMPO:
    // ¿Cuenta con otro empleo cargo o comisión en el servicio público distinto al declarado?
    const otroCargo = document.getElementById('id_datos_encargo_actual-tiene_otro_cargo1');
    const sinOtroCargo = document.getElementById('id_datos_encargo_actual-tiene_otro_cargo');
    const otroCargoContent = document.getElementById('otro_cargo');
    if (otroCargo) {
        if (otroCargo.checked) {
            otroCargoContent.style.display = 'none';
        } else {
            otroCargoContent.style.display = 'block';
        }
        otroCargo.addEventListener('change', ev => {
            otroCargoContent.style.display = 'none';
        });
    }
    if (sinOtroCargo) {
        sinOtroCargo.addEventListener('change', ev => {
            otroCargoContent.style.display = 'block';
        });
    }
    var domDeclaranteRadio = $('input[name=domicilio-ubicacion]');
    var datosCurricularesRadio = $('input[name=datos_curriculares-ubicacion]');
    if (domDeclaranteRadio) {
        domDeclaranteRadio.each(function() {
            var _id = 'id_domicilio-cat_pais';
            if(document.getElementById(_id)){
                $("#" + _id + " option[value='152']").each(function() {
                    $(this).remove();
                });
                $("#" + _id + " option[value='251']").each(function() {
                    $(this).remove();
                });
                if (this.checked && $(this).val() == 1) {
                    $("#" + _id).append("<option value='152'></option>");
                    $("#" + _id).val(152);
                    $("#" + _id + "_container").hide();
                    $("#" + _id + "_container_direccion").show();
                    $("." + _id + "_nacional").show();
                    $("." + _id + "_extranjero").hide();
                    $("#" + _id.replace('cat_pais', 'municipio')).attr('placeholder', 'Municipio');
                    $("#" + _id.replace('cat_pais', 'colonia')).attr('placeholder', 'Colonia');
                    $("#" + _id + "_container_estado").show();
                    $('#id_copropietario-rfc_container').show();
                } else if (this.checked && $(this).val() == 2){
                    $("#" + _id + "_container").show();
                    $("#" + _id + "_container_direccion").show();
                    $("." + _id + "_nacional").hide();
                    $("." + _id + "_extranjero").show();
                    $("#" + _id + "_container_estado").hide();
                    $("#" + _id.replace('cat_pais', 'municipio')).attr('placeholder', 'Ciudad');
                    $("#" + _id.replace('cat_pais', 'colonia')).attr('placeholder', 'Estado');
                    $('#id_copropietario-rfc_container').hide();
                }
            }
        });
    }
    // Establecer el domicilio según si es extranjero o mexicano
    // Si por ninguno está checked pone por defecto el mexicano
    const mex = document.querySelectorAll('.pais-rmx')[0];
    const ext = document.querySelectorAll('.pais-rmx')[1];
    if (mex && ext && !mex.checked && !ext.checked) {
        mex.checked = true;
    }
    // Recorre los radios para ocultar o mostrar los elementos de domicilio
    document.querySelectorAll('.pais-rmx').forEach(inputElement => {
        const v = parseInt(inputElement.value);
        const id = inputElement.dataset.fieldId;
        if (!inputElement.checked) {
            return;
        }
        if (v == 1) {
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
            // $('#id_copropietario-rfc_container').show();
        } else if (v == 2) {
            $("#" + id + "_container").show();
            $("#" + id + "_container_direccion").show();
            $("." + id + "_nacional").hide();
            $("#" + id + "_container_cp").show();
            $("#" + id + "_container_municipio").show();
            $("#" + id + "_container_codigo_postal").hide();
            $("." + id + "_extranjero").show();
            $("#" + id + "_container_estado").hide();
            $("#" + id.replace('cat_pais', 'municipio')).attr('placeholder', 'Ciudad');
            $("#" + id.replace('cat_pais', 'colonia')).attr('placeholder', 'Estado');
            // $('#id_copropietario-rfc_container').hide();
        } else {
            $("#" + id).append("<option value='251'></option>");
            $("#" + id).val(251);
            $("#" + id + "_container").hide();
            $("#" + id + "_container_direccion").hide();
            $("." + id + "_nacional").hide();
            $("." + id + "_extranjero").hide();
            $("#" + id + "_container_estado").hide();
            $("#" + id.replace('cat_pais', 'municipio')).attr('placeholder', 'Municipio');
            $("#" + id.replace('cat_pais', 'colonia')).attr('placeholder', 'Colonia');
        }
    })

    if (datosCurricularesRadio) {
        datosCurricularesRadio.each(function() {
            var _id = 'id_datos_curriculares-cat_pais';
            if(document.getElementById(_id)){
                $("#" + _id + " option[value='152']").each(function() {
                    $(this).remove();
                });
                $("#" + _id + " option[value='251']").each(function() {
                    $(this).remove();
                });
                if (this.checked && $(this).val() == 1) {
                    $("#" + _id).append("<option value='152'></option>");
                    $("#" + _id).val(152);
                    $("#" + _id + "_container").hide();
                    $("#" + _id + "_container_direccion").show();
                    $("." + _id + "_nacional").show();
                    $("." + _id + "_extranjero").hide();
                    $("#" + _id.replace('cat_pais', 'municipio')).attr('placeholder', 'Municipio');
                    $("#" + _id.replace('cat_pais', 'colonia')).attr('placeholder', 'Colonia');
                    $("#" + _id + "_container_estado").show();
                    $('#id_copropietario-rfc_container').show();
                } else if (this.checked && $(this).val() == 2){
                    $("#" + _id + "_container").show();
                    $("#" + _id + "_container_direccion").show();
                    $("." + _id + "_nacional").hide();
                    $("." + _id + "_extranjero").show();
                    $("#" + _id + "_container_estado").hide();
                    $("#" + _id.replace('cat_pais', 'municipio')).attr('placeholder', 'Ciudad');
                    $("#" + _id.replace('cat_pais', 'colonia')).attr('placeholder', 'Estado');
                    $('#id_copropietario-rfc_container').hide();
                }
            }
        });
    }
    
    // Quitar los decimales de los inputs numericos
    function onlyInteger(ev) {
        // Obtener el input de un evento o directamente
        const input = ev.target || ev;
        input.value = parseInt(input.value);
    }

    const inputNumbers = document.querySelectorAll('input[type=number]')
    inputNumbers.forEach(input => {
        onlyInteger(input);
        input.addEventListener('input', onlyInteger);
    })

    // Seleccionar entre vehiculo o inmueble
    // Sección 15
    function handleEspecie(ev) {
        const element = ev.target || ev;
        const value = parseInt(element.value);
        const inmueble = document.getElementById('inmuebleId');
        const vehiculo = document.getElementById('vehiculoId');
        // debugger
        if (value === 1) {
            // Si es inmueble
            inmueble.style.display = 'block';
            vehiculo.style.display = 'none';
        } else if (value === 2) {
            // Si es vehiculo
            inmueble.style.display = 'none';
            vehiculo.style.display = 'block';
        }
    }
    const tipoEspecie = document.getElementById('id_beneficios_especie-tipo_especie');

    if (tipoEspecie) {
        handleEspecie(tipoEspecie);
        tipoEspecie.addEventListener('change', handleEspecie)
    }

    // Validar el rol en el registro en la creación de un usuario
    // function rolHandle(ev) {
    //     const element = ev.target || ev;
    //     const isSuperuser = element.value == 'True';
    //     const fields = document.querySelectorAll('.userField');
    //     const superUserfields = document.querySelectorAll('.superuserField');

    //     if (isSuperuser) {
    //         fields.forEach(field => field.style.display = 'none');
    //         superUserfields.forEach(field => field.style.display = 'block');
    //     } else {
    //         fields.forEach(field => field.style.display = 'block');
    //         superUserfields.forEach(field => field.style.display = 'none');
    //     }
    // }
    // const rol = document.getElementById('id_rol');
    
    // if (rol) {
    //     rolHandle(rol);
    //     rol.addEventListener('change', rolHandle);
    // }

    // oculta los campos si es sólo lectura
    const can_edit = document.getElementById('can_edit_field');
    if (can_edit && can_edit.value === 'False') {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => input.setAttribute('disabled', true));
        const buttons = document.querySelectorAll('button[name="accion"], input[type=submit], .registrada_eliminar');
        buttons.forEach(button => button.style.display = 'none');
    }

    // Define el comportamiento de los formsets de copropiedad
    const porcentajes = document.querySelectorAll('#formset_propietarios .porcentaje input');
    const copropietario0 = document.getElementById('copropietario1');
    const copropietario1 = document.getElementById('copropietario2');
    const copropietario2 = document.getElementById('copropietario3');


    function display_feedback(is_higher){
        if(document.getElementsByClassName("porcentaje-lbl")){
            let lbl_porcecnt = document.getElementsByClassName("porcentaje-lbl");
            for (var i = 0; i < lbl_porcecnt.length; i++) {
                if(is_higher){
                    lbl_porcecnt[i].style.display = "block";
                }else{
                    lbl_porcecnt[i].style.display = "none";
                }
            }
        }
    }

    function validate_higher(value){
        if (value == 100){
            display_feedback(false);
        }else{
            display_feedback(true);
        }
    }

    function show_modal(id, copropietario){
        copropietario.querySelector('#dependientes-list').style.display = "none";
        copropietario.querySelector('#third-co').style.display = "none";
        let $is_conviviente = document.querySelector(id).value;
        console.log($is_conviviente);
        if("False" == $is_conviviente){
            $('#conyugeModal').modal("show");
        }
    }

    function copropietario_third(copropietario){
        if(copropietario !== null){
            const value = copropietario.querySelector('.titular_bien select').value;
            if(value==6){//Copropietario con tereceros
                copropietario.querySelector('#dependientes-list').style.display = "none";
                copropietario.querySelector('#third-co').style.display = "block";
            }else if(value==5) {//Dependiente economico
                copropietario.querySelector('#dependientes-list').style.display = "block";
                copropietario.querySelector('#third-co').style.display = "none";
            }else if(value==2){//Conyuge
                show_modal('#is_conyuge', copropietario);
            }else if(value==3){//Cocubina
                show_modal('#is_concubina', copropietario);
            }else{
                copropietario.querySelector('#dependientes-list').style.display = "none";
                copropietario.querySelector('#third-co').style.display = "none";
            }
        }
    }
        
    // Agregar y Ejecutar el "handle" del select del titular del bien
    copropietario0 !== null ? copropietario0.querySelector('.titular_bien select').addEventListener('change', copropietario_third.bind(this, copropietario0)) : null
    copropietario1 !== null ? copropietario1.querySelector('.titular_bien select').addEventListener('change', copropietario_third.bind(this, copropietario1)) : null
    copropietario2 !== null ? copropietario2.querySelector('.titular_bien select').addEventListener('change', copropietario_third.bind(this, copropietario2)) : null
    copropietario_third(copropietario0);
    copropietario_third(copropietario1);
    copropietario_third(copropietario2);

    function porcentajeHandle(toHide) {
        let value = 0;
        porcentajes.forEach(input => {
            value +=parseInt(input.value) || 0;
        });

        if (value >= 100) {
            toHide.forEach(copropietario => {
                let porValue = parseInt(copropietario.querySelector('.porcentaje input').value) || 0;
                if (porValue <= 0) {
                    copropietario.style.display = 'none';
                }
            }); 
        }
        else if (value === 0) {
            if(copropietario1){
                copropietario1.style.display = 'none';
            }
            if(copropietario2){
                copropietario2.style.display = 'none';
            }
        }
        else {
            toHide.forEach(copropietario => copropietario.style = '');
        }
        validate_higher(value);
    }

    porcentajes[0] !== undefined ? porcentajes[0].addEventListener('input', porcentajeHandle.bind(this, [copropietario1, copropietario2])) : null;
    porcentajes[1] !== undefined ? porcentajes[1].addEventListener('input', porcentajeHandle.bind(this, [copropietario2])) : null;
    porcentajes[2] !== undefined ? porcentajes[2].addEventListener('input', porcentajeHandle.bind(this, [copropietario2])) : null;

    porcentajeHandle([copropietario1, copropietario2]);
    porcentajeHandle([copropietario2]);

});
