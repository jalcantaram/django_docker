$(function() {
    let tipo_beneficiario = document.querySelector('select[name="apoyos-TipoBeneficiario"]');
    if (tipo_beneficiario) {
        if(tipo_beneficiario.selectedOptions[0].text == 'OTRO'){
            document.getElementById('otro-apoyos-TipoBeneficiario').style.display = 'block';
        }else{
            document.getElementById('otro-apoyos-TipoBeneficiario').style.display = 'none';
        }
        tipo_beneficiario.addEventListener('change', (e) => {
            if (e.target.selectedOptions[0].text == 'OTRO') {
                document.getElementById('otro-apoyos-TipoBeneficiario').style.display = 'block';
            } else {
                document.getElementById('otro-apoyos-TipoBeneficiario').style.display = 'none';
            }
        }, false);
    }
});