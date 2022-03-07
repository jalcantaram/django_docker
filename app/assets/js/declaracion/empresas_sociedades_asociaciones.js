$(function() {
    let tipo_participacion = document.querySelector('select[name="empresas_sociedades-tipo_Participacion"]');
    if (tipo_participacion) {
        if(tipo_participacion.selectedOptions[0].text == 'OTRO'){
            document.getElementById('otro-empresas_sociedades-tipo_Participacion').style.display = 'block';
        }else{
            document.getElementById('otro-empresas_sociedades-tipo_Participacion').style.display = 'none';
        }
        tipo_participacion.addEventListener('change', (e) => {
            if (e.target.selectedOptions[0].text == 'OTRO') {
                document.getElementById('otro-empresas_sociedades-tipo_Participacion').style.display = 'block';
            } else {
                document.getElementById('otro-empresas_sociedades-tipo_Participacion').style.display = 'none';
            }
        }, false);
    }

    if(document.querySelector('input[name="empresas_sociedades-actividad_economica"]')){
        const monto_em = document.querySelectorAll('input[name="empresas_sociedades-actividad_economica"]');
        document.getElementsByClassName('monto-neto')[0].style.display = 'none';
        Array.from(monto_em).forEach(function (element) {
            if(element.checked && element.value == 'true'){
                document.getElementsByClassName('monto-neto')[0].style.display = 'block';
            }
            if(element.checked && element.value == 'false'){
                document.getElementsByClassName('monto-neto')[0].style.display = 'none';
            }
            element.addEventListener('change', function(event) {
                var item = event.target.value;
                if(item == 'true'){
                    document.getElementsByClassName('monto-neto')[0].style.display = 'block';
                }
                if(item == 'false'){
                    document.getElementsByClassName('monto-neto')[0].style.display = 'none';
                }
            });
        });
    }
});