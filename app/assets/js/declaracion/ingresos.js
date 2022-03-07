$(document).ready(function() {

    const listElements = [
        ['id_sueldos_publicos-remuneracionOtrosIng', 'fieldsRemuneracionOtrosIng'],
        ['id_sueldos_publicos-remuneracionActividadIndus', 'fieldsActividadIndustrial'],
        ['id_sueldos_publicos-remuneracionActFinan', 'fieldsRemuneracionActFinan'],
        ['id_sueldos_publicos-remuneracionServProf', 'fieldsRemuneracionServProf'],
        ['id_sueldos_publicos-remuneracionEnajenacion', 'fieldsTiposEnajenados']
    ];

    const listElementsCargoAnterior = [
        ['id_servidor_publico-remuneracionActividadIndus', 'fieldsActividadInd'],
        ['id_servidor_publico-remuneracionActFinan', 'fieldsActivFinan'],
        ['id_servidor_publico-remuneracionServProf', 'fieldsServiProfs'],
        ['id_servidor_publico-remuneracionEnajenacion', 'fieldsTiposBienEnaje'],
        ['id_servidor_publico-remuneracionOtrosIng', 'fieldsOtroTipoIngresos'],
    ];

    function handleNumber(toHide, ev) {
        let number = 0;
        if(ev !== null){
            if (ev.target) {
                number = parseInt(ev.target.value)
            } else {
                number = parseInt(ev.value);
            }
    
            if (number > 0) {
                toHide.style = '';
            } else {
                toHide.style.display = 'none';
                toHide.querySelectorAll('input').forEach(element => {
                    element.value = '';
                });
                toHide.querySelectorAll('select.django-select2').forEach(element => {
                    $(element).val(null).trigger('change');
                })
            }
        }
    }

    listElements.forEach(item => {
        const input = document.getElementById(item[0]);
        const toHide = document.getElementById(item[1]);
        if (input && toHide) {
            handleNumber(toHide, input);
            input.addEventListener('input', handleNumber.bind(this, toHide));
        }
    });

    listElementsCargoAnterior.forEach(item => {
        const input = document.getElementById(item[0]);
        const toHide = document.getElementById(item[1]);
        handleNumber(toHide, input);
        if(input){
            input.addEventListener('input', handleNumber.bind(this, toHide));
        }
    });

});
