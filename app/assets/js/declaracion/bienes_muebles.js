$(function() {
    let otro_bmctm = document.querySelector('select[name="bienes_muebles-cat_tipos_muebles"]');
    if (otro_bmctm) {
        var marca = document.getElementById('id_marca');
        var submarca = document.getElementById('id_submarca');
        var otro_marca = document.getElementById('id_bienes_muebles-otro_marca');
        var otro_submarca = document.getElementById('id_bienes_muebles-otro_submarca');
        if(otro_bmctm.selectedOptions[0].text == 'OTRO'){
            document.getElementById('otro-bienes_muebles-cat_tipos_muebles').style.display = 'block';
            marca.parentElement.style.display = 'none';
            submarca.parentElement.style.display = 'none';
            otro_marca.parentElement.style.display = 'block';
            otro_submarca.parentElement.style.display = 'block';
        } else if(otro_bmctm.selectedOptions[0].text == 'AERONAVE' || otro_bmctm.selectedOptions[0].text == 'BARCO/ YATE') {
            document.getElementById('otro-bienes_muebles-cat_tipos_muebles').style.display = 'none';
            marca.parentElement.style.display = 'none';
            submarca.parentElement.style.display = 'none';
            otro_marca.parentElement.style.display = 'block';
            otro_submarca.parentElement.style.display = 'block';
        } else if(otro_bmctm.selectedOptions[0].text == 'AUTOMÓVIL/ MOTOCICLETA') {
            document.getElementById('otro-bienes_muebles-cat_tipos_muebles').style.display = 'none';
            marca.parentElement.style.display = 'block';
            submarca.parentElement.style.display = 'block';
            otro_marca.parentElement.style.display = 'none';
            otro_submarca.parentElement.style.display = 'none';
        }
        otro_bmctm.addEventListener('change', (e) => {
            if(e.target.selectedOptions[0].text == 'OTRO'){
                document.getElementById('otro-bienes_muebles-cat_tipos_muebles').style.display = 'block';
                marca.parentElement.style.display = 'none';
                submarca.parentElement.style.display = 'none';
                otro_marca.parentElement.style.display = 'block';
                otro_submarca.parentElement.style.display = 'block';
            } else if(e.target.selectedOptions[0].text == 'AERONAVE' || e.target.selectedOptions[0].text == 'BARCO/ YATE') {
                document.getElementById('otro-bienes_muebles-cat_tipos_muebles').style.display = 'none';
                marca.parentElement.style.display = 'none';
                submarca.parentElement.style.display = 'none';
                otro_marca.parentElement.style.display = 'block';
                otro_submarca.parentElement.style.display = 'block';
            } else if(e.target.selectedOptions[0].text == 'AUTOMÓVIL/ MOTOCICLETA') {
                document.getElementById('otro-bienes_muebles-cat_tipos_muebles').style.display = 'none';
                marca.parentElement.style.display = 'block';
                submarca.parentElement.style.display = 'block';
                otro_marca.parentElement.style.display = 'none';
                otro_submarca.parentElement.style.display = 'none';
            }
        }, false);
    }
});