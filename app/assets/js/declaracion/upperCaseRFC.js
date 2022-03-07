
if(document.getElementById("id_rfc")){
    document.getElementById("id_rfc").addEventListener("keypress", function(){ 
        document.getElementById("id_rfc").value=document.getElementById("id_rfc").value.toUpperCase();
    });
    document.getElementById("id_rfc").addEventListener("click", function(){ 
        document.getElementById("id_rfc").value=document.getElementById("id_rfc").value.toUpperCase();
    });
}