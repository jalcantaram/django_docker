$(function() {
    if(document.querySelector('input[name="representaciones_activas-pagado"]')){
        document.getElementById('monto_container_servidor').style.display = 'none';
        const representacion_act = document.querySelectorAll('input[name="representaciones_activas-pagado"]');
        Array.from(representacion_act).forEach(function (element) {
            if(element.checked && element.value == 'true'){
                document.getElementById('monto_container_servidor').style.display = 'block';
            }
            if(element.checked && element.value == 'false'){
                document.getElementById('monto_container_servidor').style.display = 'none';
            }
            element.addEventListener('change', function(event) {
                var item = event.target.value;
                if(item == 'true'){
                    document.getElementById('monto_container_servidor').style.display = 'block';
                }
                if(item == 'false'){
                    document.getElementById('monto_container_servidor').style.display = 'none';
                }
            });
        });
    }
});