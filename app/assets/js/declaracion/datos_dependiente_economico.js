$(function() {
    const regex = /^([A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))$/;
    const regex_full = /^([A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z|\d]{3}))$/;
    let rfc_dde = document.getElementById('id_var-rfc');
    if((rfc_dde !== null && rfc_dde.parentElement.className !== 'valida_rfc_moral') && (rfc_dde !== null && rfc_dde.parentElement.className !== 'valida_rfc')){
        var strDate = new Date();
        let list_events = ['input', 'keypress', 'keyup', 'focus'];
        list_events.forEach(function(event){
            if(rfc_dde){
                rfc_dde.addEventListener(event, function(e){
                    e.target.value = e.target.value.toUpperCase();
                    $(this).removeClass("is-invalid");
                    $(this).next().remove();
                    if (e.target.value.length == 10){
                        if(regex.test(e.target.value)){
                            var short_reg = regex.exec(e.target.value);
                            if (short_reg !== null) {
                                let day = parseInt(short_reg[4],10);
                                let month = parseInt(short_reg[3],10)-1;
                                let year = parseInt(short_reg[2],10)+1900;
                                if(year < (strDate.getFullYear()-99)) year += 100;
                                let date = new Date(year, month, day);
                                let birthday = date;
                                let now = strDate;
                                let edad = now.getFullYear() - birthday.getFullYear();
                                let m = now.getMonth() - birthday.getMonth();
                                if (m < 0 || (m === 0 && now.getDate() < birthday.getDate())) {
                                    edad--;
                                }
                                if(edad >= 18){
                                    if ($(this).parent().find(".invalid-feedback").length == 0) {
                                        $(this).addClass("is-invalid");
                                        $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido con homoclave.</div>");
                                    }
                                } else if(date <= strDate) {
                                    $(this).removeClass("is-invalid");
                                    $(this).next().remove();
                                } else {
                                    if ($(this).parent().find(".invalid-feedback").length == 0) {
                                        $(this).addClass("is-invalid");
                                        $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                                    }
                                }
                            } else {
                                if ($(this).parent().find(".invalid-feedback").length == 0) {
                                    $(this).addClass("is-invalid");
                                    $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                                }
                            }
                        } else {
                            if ($(this).parent().find(".invalid-feedback").length == 0) {
                                $(this).addClass("is-invalid");
                                $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                            }
                        }
                    } else if(e.target.value.length > 10 && e.target.value.length <= 13){
                        if(regex_full.test(e.target.value)){
                            var full_reg = regex_full.exec(e.target.value);
                            if (full_reg !== null) {
                                let day = parseInt(full_reg[4],10);
                                let month = parseInt(full_reg[3],10)-1;
                                let year = parseInt(full_reg[2],10)+1900;
                                if(year < (strDate.getFullYear()-99)) year += 100;
                                let date = new Date(year, month, day);
                                let birthday = date;
                                let now = strDate;
                                let edad = now.getFullYear() - birthday.getFullYear();
                                let m = now.getMonth() - birthday.getMonth();
                                if (m < 0 || (m === 0 && now.getDate() < birthday.getDate())) {
                                    edad--;
                                }
                                if(date <= strDate) {
                                    $(this).removeClass("is-invalid");
                                    $(this).next().remove();
                                } else {
                                    if ($(this).parent().find(".invalid-feedback").length == 0) {
                                        $(this).addClass("is-invalid");
                                        $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                                    }
                                }
                            } else {
                                if ($(this).parent().find(".invalid-feedback").length == 0) {
                                    $(this).addClass("is-invalid");
                                    $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                                }
                            }
                        } else {
                            if ($(this).parent().find(".invalid-feedback").length == 0) {
                                $(this).addClass("is-invalid");
                                $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                            }
                        }
                    }else{
                        if ($(this).parent().find(".invalid-feedback").length == 0) {
                            $(this).addClass("is-invalid");
                            $(this).parent().append("<div class=\"invalid-feedback\">Introduzca un RFC válido.</div>");
                        }
                    }
                });
            }
        });
    }
});