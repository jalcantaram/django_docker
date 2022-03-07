$(function() {
    let betv = document.querySelector('select[name="beneficios_especie-tipo_vehiculo"]');
    if (betv) {
        var marca = document.getElementById('id_marca');
        var submarca = document.getElementById('id_submarca');
        var otro_marca = document.getElementById('id_beneficios_especie-otro_marca');
        var otro_submarca = document.getElementById('id_beneficios_especie-otro_submarca');
        if(betv.selectedOptions[0].text == 'OTRO'){
            document.getElementById('id_beneficios_especie-otro_tipo_vehiculo').style.display = 'block';
            marca.parentElement.style.display = 'none';
            submarca.parentElement.style.display = 'none';
            otro_marca.parentElement.style.display = 'block';
            otro_submarca.parentElement.style.display = 'block';
        } else if(betv.selectedOptions[0].text == 'AERONAVE' || betv.selectedOptions[0].text == 'BARCO/ YATE') {
            document.getElementById('id_beneficios_especie-otro_tipo_vehiculo').style.display = 'none';
            marca.parentElement.style.display = 'none';
            submarca.parentElement.style.display = 'none';
            otro_marca.parentElement.style.display = 'block';
            otro_submarca.parentElement.style.display = 'block';
        } else if(betv.selectedOptions[0].text == 'AUTOMÓVIL/ MOTOCICLETA') {
            document.getElementById('id_beneficios_especie-otro_tipo_vehiculo').style.display = 'none';
            marca.parentElement.style.display = 'block';
            submarca.parentElement.style.display = 'block';
            otro_marca.parentElement.style.display = 'none';
            otro_submarca.parentElement.style.display = 'none';
        }
        betv.addEventListener('change', (e) => {
            if(e.target.selectedOptions[0].text == 'OTRO'){
                document.getElementById('id_beneficios_especie-otro_tipo_vehiculo').style.display = 'block';
                marca.parentElement.style.display = 'none';
                submarca.parentElement.style.display = 'none';
                otro_marca.parentElement.style.display = 'block';
                otro_submarca.parentElement.style.display = 'block';
            } else if(e.target.selectedOptions[0].text == 'AERONAVE' || e.target.selectedOptions[0].text == 'BARCO/ YATE') {
                document.getElementById('id_beneficios_especie-otro_tipo_vehiculo').style.display = 'none';
                marca.parentElement.style.display = 'none';
                submarca.parentElement.style.display = 'none';
                otro_marca.parentElement.style.display = 'block';
                otro_submarca.parentElement.style.display = 'block';
            } else if(e.target.selectedOptions[0].text == 'AUTOMÓVIL/ MOTOCICLETA') {
                document.getElementById('id_beneficios_especie-otro_tipo_vehiculo').style.display = 'none';
                marca.parentElement.style.display = 'block';
                submarca.parentElement.style.display = 'block';
                otro_marca.parentElement.style.display = 'none';
                otro_submarca.parentElement.style.display = 'none';
            }
        }, false);
    }
});