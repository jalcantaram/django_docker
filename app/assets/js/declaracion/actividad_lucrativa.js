$(function() {
  let actividadLucrativa = document.getElementById('actividadLucrativa');
  let quest0 = document.getElementById('id_clientes_principales-actividadIndependiente');
  let quest1 = document.getElementById('id_clientes_principales-actividadIndependiente1');
  if(quest0){
    if(quest0.checked){
      actividadLucrativa.style.display = 'block';
    }
  }
  if(quest1){
    if(quest1.checked){
      actividadLucrativa.style.display = 'none';
    }
  }
  if(quest0){
    quest0.addEventListener('change', function(){
      actividadLucrativa.style.display = 'block';
    });
  }
  if(quest1){
    quest1.addEventListener('change', function(){
      actividadLucrativa.style.display = 'none';
    });
  }
});