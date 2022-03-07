(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            let button = document.getElementById('sign');
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }else{
                button.disabled = true;
                button.children[0].classList.remove('d-none');
                button.classList.add('disabled');
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);

    // let pass = document.getElementById('id_password');
    // let url_sign_without_fiel = window.location.search;
    // if(url_sign_without_fiel.includes('false') && pass){
    //     pass.addEventListener('input', function(){
    //         this.value = this.value.replace(/[^a-zA-Z0-9-_.!?#$ñÑ&]/g, '')
    //     });
    // }
})();
