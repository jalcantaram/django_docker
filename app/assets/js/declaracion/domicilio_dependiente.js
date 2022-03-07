
$(document).ready(function() {
    if(document.getElementById("mismo-domicilio-no")){
        document.getElementById("mismo-domicilio-no").addEventListener("click", function(){ 
            document.getElementById("id_domicilio-nombre_via").value = "";
            document.getElementById("id_domicilio-num_exterior").value = "";
            document.getElementById("id_domicilio-num_interior").value = "";
            document.getElementById("id_domicilio-colonia").value = "";
            document.getElementById("id_domicilio-cp").value = "";
            $('#id_cat_entidades_federativas').val(null).trigger('change');
            $('#id_municipio_alcaldia').val(null).trigger('change');
        });
    }
});
