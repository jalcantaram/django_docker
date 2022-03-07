$(function() {
    const titularesDeclarante = document.querySelectorAll('input[name$=cat_titular_bienes]');
    const copropitario = document.getElementById('copropietario');

    if (titularesDeclarante == null || copropitario == null) {
        return;
    }

    //  Al seleccionar que el declarante es el titular del activo
    //  no debe existir el campo (identificación de terceros)
    if (titularesDeclarante[0].checked) {
        copropitario.style.display = 'none';
    }else{
        copropitario.style.display = 'block';
    }
    titularesDeclarante.forEach(titular => {
        titular.addEventListener('change', ev => {
            if (titular.value == '1') {
                copropitario.style.display = 'none';
                // Limpiar los campos
                copropitario.querySelectorAll('input[type=text]').forEach(item => {
                    item.value = '';
                });
            } else {
                copropitario.style.display = 'block';
            }
        });
    });
});
