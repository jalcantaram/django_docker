$(document).ready(function() {
    /**
     * Si es público no debería dejar desplegadas los campos siguientes: funcion – area -
     */

    let ambitoPublico = document.getElementById('id_conyuge_dependiente-cat_ambitos_laborales-1');
    let ambitoPrivado = document.getElementById('id_conyuge_dependiente-cat_ambitos_laborales-2');
    let ambitoNinguno = document.getElementById('id_conyuge_dependiente-cat_ambitos_laborales-3');
    let ambitoOtro = document.getElementById('id_conyuge_dependiente-cat_ambitos_laborales-4');
    let sector = document.getElementsByClassName('sector');
    let area = document.getElementById('area_adscrip');
    let funcion = document.getElementById('funcion_principal');
    let rfc_moral = document.getElementById('rfc-pareja-moral');
    let nivelOrden = document.getElementById('orden_gobierno');
    let poderPublico = document.getElementById('poderes');

    if (ambitoPublico == null || ambitoPrivado == null || ambitoNinguno == null || ambitoOtro == null || area == null || funcion == null || sector == null || rfc_moral == null) {
        return;
    }

    if (ambitoPublico.checked) {
        area.style.display = 'block';
        funcion.style.display = 'block';
        rfc_moral.style.display = 'none';
        Array.from(sector).forEach(function (element) { 
            element.style.display = 'none';
        });
        nivelOrden.style.display = 'block';
        poderPublico.style.display = 'block';
    } else if (ambitoPrivado.checked){
        area.style.display = 'block';
        funcion.style.display = 'none';
        rfc_moral.style.display = 'block';
        Array.from(sector).forEach(function (element) { 
            element.style.display = 'block';
        });
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
    } else if (ambitoNinguno.checked){
        area.style.display = 'none';
        funcion.style.display = 'none';
        rfc_moral.style.display = 'none';
        Array.from(sector).forEach(function (element) { 
            element.style.display = 'none';
        });
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
    } else if (ambitoOtro.checked){
        area.style.display = 'block';
        funcion.style.display = 'none';
        rfc_moral.style.display = 'block';
        Array.from(sector).forEach(function (element) { 
            element.style.display = 'block';
        });
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
    }
    ambitoPublico.addEventListener('change', () => {
        // Es publico
        area.style.display = 'block';
        funcion.style.display = 'block';
        rfc_moral.style.display = 'none';
        Array.from(sector).forEach(function (element) { 
            element.style.display = 'none';
        });
        nivelOrden.style.display = 'block';
        poderPublico.style.display = 'block';
    });

    ambitoPrivado.addEventListener('change', () => {
        // Es privado
        area.style.display = 'block';
        funcion.style.display = 'none';
        rfc_moral.style.display = 'block';
        Array.from(sector).forEach(function (element) { 
            element.style.display = 'block';
        });
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
    });

    ambitoNinguno.addEventListener('change', () => {
        // Es NINGUNO
        area.style.display = 'none';
        funcion.style.display = 'none';
        rfc_moral.style.display = 'none';
        Array.from(sector).forEach(function (element) { 
            element.style.display = 'none';
        });
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
    });

    ambitoOtro.addEventListener('change', () => {
        // Es privado
        area.style.display = 'block';
        funcion.style.display = 'none';
        rfc_moral.style.display = 'block';
        Array.from(sector).forEach(function (element) { 
            element.style.display = 'block';
        });
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
    });

});
