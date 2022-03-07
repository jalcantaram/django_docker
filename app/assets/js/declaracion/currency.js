/**
 * Este archivo es para formatear valores númericos a moneda
 * En este caso los cientos se separan por comas y se agrega el signo de $
 * esta funcion depende de currency.html
 *  la cual como parametros pretende el nombre del campo name=form.campo.name el cual es obligatorio
 * el placeholder es opcional: place="Field" 
 * el valor: value=form.campo.value es obligatorio
 * el nombre del formulario: base="sueldos_publicos" campo obligatorio
 * y por ultimo: required=True opciional
 */
$(document).ready(function () {
    //Con esta funcion agregamos el signo de $ a el valor 
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      })
  
    var elements = document.getElementsByClassName("number-separator");

    function format_currency(e){
        //Validamo si sólo son números, le agregamos el signo de $
        if (/^-?\d*[,.]?(\d{0,3},)*(\d{3},)?\d{0,3}$/.test(e.value)) {
            let current_money = formatter.format(e.value)
            console.log(current_money)
            //console.log(event.originalTarget.id)
            e.value = current_money
            let id_hidden = e.id.replace('-face','')
            document.getElementById(id_hidden).value=current_money.replace('$', '').replace(',', '').replace(',', '').replace(',', '')
        }else{
            // Si ya tiene el signo de peso, se lo quitamos para validar si no hay letras
            let current_money = e.value.replace('$', '').replace(',', '').replace(',', '').replace(',', '')
            let id_hidden = e.id.replace('-face','')
            if (/^-?\d*[,.]?(\d{0,3},)*(\d{3},)?\d{0,3}$/.test(current_money)) {
                document.getElementById(id_hidden).value=current_money
            }else{//Ingreso letras  se borra para que no se guarde
                document.getElementById(e.id).value="0"
                document.getElementById(id_hidden).value="0"
            }
        }
    }

    for (var i = 0; i < elements.length; i++) {
        format_currency(elements[i]);
        elements[i].addEventListener("blur", (event) => {
            // handle keypress
            format_currency(event.target);
        });
        
    }


});