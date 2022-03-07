$(function() {
    let otro_efp = document.querySelector('select[name="otro_cargo-cat_funciones_principales"]');
    if (otro_efp) {
        if(otro_efp.selectedOptions[0].text == 'OTRO'){
            document.getElementById('otro-otro_cargo-cat_funciones_principales').style.display = 'block';
        }else{
            document.getElementById('otro-otro_cargo-cat_funciones_principales').style.display = 'none';
        }
        otro_efp.addEventListener('change', (e) => {
            if (e.target.selectedOptions[0].text == 'OTRO') {
                document.getElementById('otro-otro_cargo-cat_funciones_principales').style.display = 'block';
            } else {
                document.getElementById('otro-otro_cargo-cat_funciones_principales').style.display = 'none';
            }
        }, false);
    }
});