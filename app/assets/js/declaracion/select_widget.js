$(document).ready(function() {
    var show = function (elem) {
        elem.classList.remove('d-none');
    };
    var hide = function (elem) {
        elem.classList.add('d-none');
    };
    $('select.django-select2').select2({
        language: 'es'
    });
    document.querySelectorAll('select.django-select2').forEach((element) => {
        switch (element.id) {
            case 'id_var-cat_estados_civiles':
                var _id = document.getElementById(element.id);
                if(_id.selectedOptions[0].value === '2'){
                    $('#id_regimen_matrimonial').show();
                }else{
                    $('#id_regimen_matrimonial').hide();
                }
                break;
            case 'id_var-cat_regimenes_matrimoniales':
                var _id = document.getElementById(element.id);
                if(_id.selectedOptions[0].text == 'OTRO'){
                    $('input[name=var-otro_estado_civil]').parent().parent().show();
                }else{
                    $('input[name=var-otro_estado_civil]').parent().parent().hide();
                }
                break;
            case 'id_experiencia_laboral-cat_funciones_principales':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text == 'OTRO') {
                    $('input[name=experiencia_laboral-otra_funcion]').parent().parent().show();
                }else{
                    $('input[name=experiencia_laboral-otra_funcion]').parent().parent().hide();
                }
                break;
            case 'id_experiencia_laboral-cat_sectores_industria':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text == 'OTRO') {
                    $('input[name=experiencia_laboral-otro_sector]').parent().parent().show();
                }else{
                    $('input[name=experiencia_laboral-otro_sector]').parent().parent().hide();
                }
                break;
            case 'id_conyuge_dependiente-cat_ambitos_laborales':
                var _id = document.getElementById(element.id);
                hasCatAmbitoLaboral(_id.selectedOptions[0].value);
                break;
            case 'id_inversiones-cat_titular_bienes':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].value === '') {
                    $('#copropietario').hide();
                    $('#porcentaje').hide();
                } else if (_id.selectedOptions[0].value == '1') {
                    $('#copropietario').hide();
                    $('#porcentaje').hide();
                }else{
                    $('#copropietario').show();
                    $('#porcentaje').show();
                }
                break;
            case 'id_bienes_inmuebles-cat_titular_bienes':
            case 'id_bienes_muebles-cat_titular_bienes':
            case 'id_muebles_no_registrables-cat_titular_bienes':
            case 'id_inversiones-cat_titular_bienes':
            case 'id_deudas_otros-cat_titular_bienes':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].value == '1') {
                    $('#copropietario').hide();
                    $('#porcentaje').hide();
                }
                else if (_id.selectedOptions[0].value == '6') {
                    $('#copropietario').show();
                    $('#porcentaje').show();
                    $('#porcentaje #owner').text('TERCERO');
        
                }else{
                    $('#copropietario').hide();
                    $('#porcentaje').show();
                    $('#porcentaje #owner').text(_id.selectedOptions[0].text);
                }
                break;
            case 'id_bienes_personas-tipo_relacion':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text === 'OTRO') {
                    $('input[name=bienes_personas-otra_relacion]').parent().parent().show();
                }else{
                    $('input[name=bienes_personas-otra_relacion]').parent().parent().hide();
                }
                break;
            case 'id_bienes_inmuebles-tipoMotivoBaja':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text === 'OTRO') {
                    $('input[name=bienes_inmuebles-otro_motivoBaja]').parent().parent().show();
                }else{
                    $('input[name=bienes_inmuebles-otro_motivoBaja]').parent().parent().hide();
                }
                break;
            case 'id_bienes_muebles-tipoMotivoBaja':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text === 'OTRO') {
                    $('input[name=bienes_muebles-otro_motivoBaja]').parent().parent().show();
                }else{
                    $('input[name=bienes_muebles-otro_motivoBaja]').parent().parent().hide();
                }
                break;
            case 'id_muebles_no_registrables-tipoMotivoBaja':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text === 'OTRO') {
                    $('input[name=muebles_no_registrables-otro_motivoBaja]').parent().parent().show();
                }else{
                    $('input[name=muebles_no_registrables-otro_motivoBaja]').parent().parent().hide();
                }
                break;
            case 'id_deudas_otros-cat_tipos_adeudos':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text === 'OTRO') {
                    $('input[name=deudas_otros-otro_tipo_adeudo]').parent().parent().show();
                }else{
                    $('input[name=deudas_otros-otro_tipo_adeudo]').parent().parent().hide();
                }
                break;
            case 'id_beneficios_especie-tipo_bien_servicio':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text === 'OTRO') {
                    $('input[name=beneficios_especie-otro_tipo_bien_servicio]').parent().parent().show();
                }else{
                    $('input[name=beneficios_especie-otro_tipo_bien_servicio]').parent().parent().hide();
                }
                break;
            case 'id_beneficios_especie-tipo_vehiculo':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text === 'OTRO') {
                    $('input[name=beneficios_especie-otro_tipo_vehiculo]').parent().parent().show();
                }else{
                    $('input[name=beneficios_especie-otro_tipo_vehiculo]').parent().parent().hide();
                }
                break;
            case 'id_beneficios_especie-cat_tipos_relaciones_personales':
                var _id = document.getElementById(element.id);
                if (_id.selectedOptions[0].text === 'OTRO') {
                    $('input[name=beneficios_especie-otra_relacion]').parent().parent().show();
                }else{
                    $('input[name=beneficios_especie-otra_relacion]').parent().parent().hide();
                }
                break;
            case 'id_inversiones-cat_tipos_operaciones':
                var _id = document.getElementById(element.id);
                changeInversiones(_id.selectedOptions[0].value);
                break;
        }
    });
    $('#id_var-cat_estados_civiles').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.id == '2') {
            $('#id_regimen_matrimonial').show();
            if($('#id_var-cat_regimenes_matrimoniales option:selected').html()){
                $('input[name=var-otro_estado_civil]').parent().parent().show();
            }
        }else{
            $('#id_regimen_matrimonial').hide();
        }
    });
    $('#id_experiencia_laboral-cat_funciones_principales').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text == 'OTRO') {
            $('#id_experiencia_laboral-otra_funcion').parent().parent().show();
        }else{
            $('#id_experiencia_laboral-otra_funcion').parent().parent().hide();
        }
    });
    $('#id_experiencia_laboral-cat_sectores_industria').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text == 'OTRO') {
            $('#id_experiencia_laboral-otro_sector').parent().parent().show();
        }else{
            $('#id_experiencia_laboral-otro_sector').parent().parent().hide();
        }
    });
    $('select.django-select2').on('change', function(){
        var selectedText  = this.selectedOptions[0].text;
        if(selectedText == 'OTRO'){
            if (document.getElementsByName('var-otro_estado_civil')) {
                $('input[name=var-otro_estado_civil]').parent().parent().show();
            }
            if (document.getElementsByName('datos_encargo_actual-otra_funcion')) {
                $('input[name=datos_encargo_actual-otra_funcion]').parent().parent().show();
            }
        }else{
            if (document.getElementsByName('var-otro_estado_civil')) {
                $('input[name=var-otro_estado_civil]').parent().parent().hide();
            }
            if (document.getElementsByName('datos_encargo_actual-otra_funcion')) {
                $('input[name=datos_encargo_actual-otra_funcion]').parent().parent().hide();
            }
        }
    });
    $('#id_conyuge_dependiente-cat_ambitos_laborales').on('select2:select', function (e) {
        var data = e.params.data;
        hasCatAmbitoLaboral(data.id);
    });

    $('#id_bienes_personas-tipo_relacion').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text === 'OTRO') {
            $('input[name=bienes_personas-otra_relacion]').parent().parent().show();
        }else{
            $('input[name=bienes_personas-otra_relacion]').parent().parent().hide();
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('input[name=bienes_personas-otra_relacion]').parent().parent().hide();
        }
    });
    $('#id_bienes_inmuebles-tipoMotivoBaja').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text === 'OTRO') {
            $('input[name=bienes_inmuebles-otro_motivoBaja]').parent().parent().show();
        }else{
            $('input[name=bienes_inmuebles-otro_motivoBaja]').parent().parent().hide();
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('input[name=bienes_inmuebles-otro_motivoBaja]').parent().parent().hide();
        }
    });

    $('#id_bienes_muebles-cat_titular_bienes, #id_muebles_no_registrables-cat_titular_bienes, #id_bienes_inmuebles-cat_titular_bienes, #id_inversiones-cat_titular_bienes, #id_deudas_otros-cat_titular_bienes'
    ).on('select2:select', function (e) {
        var data = e.params.data;
        if (data.id == '1') {
            $('#copropietario').hide();
            $('#porcentaje').hide();
        }else if (data.id == '6'){
            $('#copropietario').show();
            $('#porcentaje').show();
            $('#porcentaje #owner').text('TERCERO');
        }
        else{
            $('#copropietario').hide();
            $('#porcentaje').show();
            $('#porcentaje #owner').text(data.text);
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('#copropietario').hide();
        }
    });
    $('#id_bienes_muebles-tipoMotivoBaja').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text === 'OTRO') {
            $('input[name=bienes_muebles-otro_motivoBaja]').parent().parent().show();
        }else{
            $('input[name=bienes_muebles-otro_motivoBaja]').parent().parent().hide();
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('input[name=bienes_muebles-otro_motivoBaja]').parent().parent().hide();
        }
    });

    function handleChangeOtro(ev) {
        // Obtener el select_html del evento o puede ser enviado directamente a la función
        const select = ev.target || ev;

        if (document.getElementById(`otro-${select.name}`)){
            const options = select.options
            const option = options[select.selectedIndex];
            const text = option ? option.text : '';
            const otro = document.getElementById(`otro-${select.name}`);
            if (text === 'OTRO') {
                otro.querySelector('input').removeAttribute('disabled');
                $(otro).show();
            } else {
                otro.querySelector('input').setAttribute('disabled', true);
                otro.querySelector('input').value = '';
                $(otro).hide();
            }
        }
    }
    // funcionalidad de selects y el campo "otro"
    document.querySelectorAll('.select2-otro').forEach(select => {
        handleChangeOtro(select);
        $(select).on('change', handleChangeOtro)
    })

    $('#id_muebles_no_registrables-tipoMotivoBaja').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text === 'OTRO') {
            $('input[name=muebles_no_registrables-otro_motivoBaja]').parent().parent().show();
        }else{
            $('input[name=muebles_no_registrables-otro_motivoBaja]').parent().parent().hide();
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('input[name=muebles_no_registrables-otro_motivoBaja]').parent().parent().hide();
        }
    });
    $('#id_deudas_otros-cat_tipos_adeudos').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text === 'OTRO') {
            $('input[name=deudas_otros-otro_tipo_adeudo]').parent().parent().show();
        }else{
            $('input[name=deudas_otros-otro_tipo_adeudo]').parent().parent().hide();
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('input[name=deudas_otros-otro_tipo_adeudo]').parent().parent().hide();
        }
    });
    $('#id_beneficios_especie-tipo_bien_servicio').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text === 'OTRO') {
            $('input[name=beneficios_especie-otro_tipo_bien_servicio]').parent().parent().show();
        }else{
            $('input[name=beneficios_especie-otro_tipo_bien_servicio]').parent().parent().hide();
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('input[name=beneficios_especie-otro_tipo_bien_servicio]').parent().parent().hide();
        }
    });
    $('#id_beneficios_especie-tipo_vehiculo').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text === 'OTRO') {
            $('input[name=beneficios_especie-otro_tipo_vehiculo]').parent().parent().show();
        }else{
            $('input[name=beneficios_especie-otro_tipo_vehiculo]').parent().parent().hide();
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('input[name=beneficios_especie-otro_tipo_vehiculo]').parent().parent().hide();
        }
    });
    $('#id_beneficios_especie-cat_tipos_relaciones_personales').on('select2:select', function (e) {
        var data = e.params.data;
        if (data.text === 'OTRO') {
            $('input[name=beneficios_especie-otra_relacion]').parent().parent().show();
        }else{
            $('input[name=beneficios_especie-otra_relacion]').parent().parent().hide();
        }
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        if(data.selected){
            $('input[name=beneficios_especie-otra_relacion]').parent().parent().hide();
        }
    });

    $('#id_inversiones-cat_tipos_operaciones').on('select2:select', function (e) {
        var data = e.params.data;
        changeInversiones(data.id);
    }).on('select2:clearing', function (e) {
        var data = e.target[0];
        changeInversiones(data.id);
    });
    function hasCatAmbitoLaboral(_val){
        if (_val == '1') {
            $('#id_pareja-dependiente_container_trabajo').show();
            $('#orden_gobierno').show();
            $('#poderes').show();
            $('#id_conyuge_dependiente-otro_ambitos_laborales').parent().parent().hide();
            $('#id_conyuge_dependiente-nombre_institucion').parent().parent().show();
            $('#id_conyuge_dependiente-unidad_area_administrativa').parent().parent().show();
            $('#id_conyuge_dependiente-nombre_empresa').parent().parent().hide();
        } else if (_val == '2') {
            $('#id_pareja-dependiente_container_trabajo').show();
            $('#orden_gobierno').hide();
            $('#poderes').hide();
            $('#id_conyuge_dependiente-otro_ambitos_laborales').parent().parent().hide();
            $('#id_conyuge_dependiente-nombre_institucion').parent().parent().hide();
            $('#id_conyuge_dependiente-unidad_area_administrativa').parent().parent().hide();
            $('#id_conyuge_dependiente-nombre_empresa').parent().parent().show();
        } else if (_val == '3') {
            $('#id_pareja-dependiente_container_trabajo').hide();
            $('#orden_gobierno').hide();
            $('#poderes').hide();
            $('#id_conyuge_dependiente-otro_ambitos_laborales').parent().parent().hide();
            $('#id_conyuge_dependiente-nombre_institucion').parent().parent().hide();
            $('#id_conyuge_dependiente-unidad_area_administrativa').parent().parent().hide();
            $('#id_conyuge_dependiente-nombre_empresa').parent().parent().hide();
        } else if (_val == '4') {
            $('#id_pareja-dependiente_container_trabajo').hide();
            $('#orden_gobierno').hide();
            $('#poderes').hide();
            $('#id_conyuge_dependiente-otro_ambitos_laborales').parent().parent().show();
            $('#id_conyuge_dependiente-nombre_institucion').parent().parent().hide();
            $('#id_conyuge_dependiente-unidad_area_administrativa').parent().parent().hide();
            $('#id_conyuge_dependiente-nombre_empresa').parent().parent().hide();
        }else{
            $('#id_pareja-dependiente_container_trabajo').hide();
            $('#orden_gobierno').hide();
            $('#poderes').hide();
            $('#id_conyuge_dependiente-otro_ambitos_laborales').parent().parent().hide();
            $('#id_conyuge_dependiente-nombre_institucion').parent().parent().hide();
            $('#id_conyuge_dependiente-unidad_area_administrativa').parent().parent().hide();
            $('#id_conyuge_dependiente-nombre_empresa').parent().parent().hide();
        }
    }
    function changeInversiones(_val){
        const hideAll = function(){
            hide(document.getElementById('id_inversiones-cat_tipos_inversiones').parentElement.parentElement);
            hide(document.getElementById('id_inversiones-invFondosInversion').parentElement.parentElement);
            hide(document.getElementById('id_inversiones-invOrganizacionesPrivadas').parentElement.parentElement);
            hide(document.getElementById('id_inversiones-invPosesionMonedas').parentElement.parentElement);
            hide(document.getElementById('id_inversiones-invSeguros').parentElement.parentElement);
            hide(document.getElementById('id_inversiones-invBursatiles').parentElement.parentElement);
            hide(document.getElementById('id_inversiones-invAfores').parentElement.parentElement);
        }
        hideAll();
        if(_val == ''){
            hideAll();
        } else if (_val == '1'){
            show(document.getElementById('id_inversiones-cat_tipos_inversiones').parentElement.parentElement);
        } else if (_val == '2'){
            show(document.getElementById('id_inversiones-invFondosInversion').parentElement.parentElement);
        } else if (_val == '3'){
            show(document.getElementById('id_inversiones-invOrganizacionesPrivadas').parentElement.parentElement);
        } else if (_val == '4'){
            show(document.getElementById('id_inversiones-invPosesionMonedas').parentElement.parentElement);
        } else if (_val == '5'){
            show(document.getElementById('id_inversiones-invSeguros').parentElement.parentElement);
        } else if (_val == '6'){
            show(document.getElementById('id_inversiones-invBursatiles').parentElement.parentElement);
        } else if (_val == '7'){
            show(document.getElementById('id_inversiones-invAfores').parentElement.parentElement);
        }
    }
});