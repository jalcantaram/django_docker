$(document).ready(function() {
    /**
     * Si es privado no debería dejar desplegadas los campos siguientes: NIVEL/ORDEN DE GOBIERNO – PODER PUBLICO
     */
    let ambitoPublico = document.querySelector('input[id$="cat_ambitos_laborales-1"]');
    let ambitoPrivado = document.querySelector('input[id$="cat_ambitos_laborales-2"]');
    let ambitoOtro = document.querySelector('input[id$="cat_ambitos_laborales-3"]');

    let nivelOrden = document.getElementById('orden_gobierno');
    let poderPublico = document.getElementById('poderes');
    let nombreInstitucion = document.getElementById('nombre-institucion');
    let entePublico = document.getElementById('ente-publico');


    //Pareja-dependiente
    let sector = document.getElementsByClassName('sector');
    let area = document.getElementById('area_adscrip');
    let funcion = document.getElementById('funcion_principal');

    if (ambitoPrivado == null || ambitoPrivado == null || nivelOrden == null || poderPublico == null) {
        return;
    }

    function publico(is_public){
        if(entePublico){
            if(is_public){
                //publico
                entePublico.style.display = 'block';
                nombreInstitucion.style.display = 'none';
                //sector.style.display = 'none';
                area.style.display = 'block';
                funcion.style.display = 'block';
                //limpiar campos
                nombreInstitucion.querySelectorAll('input').forEach(input => {
                    input.value = '';
                });

            }else{
                //privado
                entePublico.style.display = 'none';
                nombreInstitucion.style.display = 'block';
                //sector.style.display = 'block';
                area.style.display = 'none';
                funcion.style.display = 'none';
                //limpiar campos
                entePublico.querySelectorAll('input').forEach(input => {
                    input.value = '';
                });
            }
        }
    }

    if (ambitoPublico.checked) {
        nivelOrden.style.display = 'block';
        poderPublico.style.display = 'block';
        publico(true);
    }
    if (ambitoOtro.checked) {
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
        publico(true);
        poderPublico.querySelectorAll('input').forEach(input => {
            input.checked = false;
        });
    }
    if (ambitoPrivado.checked) {
        // Es privado
        publico(false);
    }

    ambitoPublico.addEventListener('change', () => {
        // Es publico
        nivelOrden.style.display = 'block';
        poderPublico.style.display = 'block';
        publico(true);
    });

    ambitoPrivado.addEventListener('change', () => {
        // Es privado
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
        // Limpiar los campos
        poderPublico.querySelectorAll('input').forEach(input => {
            input.checked = false;
        });
        nivelOrden.querySelector('select').value = '';
        publico(false);
    });
    ambitoOtro.addEventListener('change', () => {
        // Es privado
        nivelOrden.style.display = 'none';
        poderPublico.style.display = 'none';
        // Limpiar los campos
        poderPublico.querySelectorAll('input').forEach(input => {
            input.checked = false;
        });
        nivelOrden.querySelector('select').value = '';
        publico(false);
    });
});
