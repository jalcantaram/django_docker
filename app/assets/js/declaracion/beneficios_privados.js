$(function() {
    let bgr = document.querySelector('select[name="beneficios_gratuitos-TipoBeneficiario"]');
    if(bgr){
        if(bgr.selectedOptions[0].text == 'OTRO'){
            document.getElementById('otro-beneficios_gratuitos-TipoBeneficiario').style.display = 'block';
        }else{
            document.getElementById('otro-beneficios_gratuitos-TipoBeneficiario').style.display = 'none';
        }
        bgr.addEventListener('change', (e) => {
            if (e.target.selectedOptions[0].text == 'OTRO') {
                document.getElementById('otro-beneficios_gratuitos-TipoBeneficiario').style.display = 'block';
            } else {
                document.getElementById('otro-beneficios_gratuitos-TipoBeneficiario').style.display = 'none';
            }
        }, false);
    }
    let csi = document.querySelector('select[name="beneficios_gratuitos-cat_sectores_industria"]');
    if(csi){
        if(csi.selectedOptions[0].text == 'OTRO'){
            document.getElementById('otro-beneficios_gratuitos-cat_sectores_industria').style.display = 'block';
        }else{
            document.getElementById('otro-beneficios_gratuitos-cat_sectores_industria').style.display = 'none';
        }
        csi.addEventListener('change', (e) => {
            if (e.target.selectedOptions[0].text == 'OTRO') {
                document.getElementById('otro-beneficios_gratuitos-cat_sectores_industria').style.display = 'block';
            } else {
                document.getElementById('otro-beneficios_gratuitos-cat_sectores_industria').style.display = 'none';
            }
        }, false);
    }
});