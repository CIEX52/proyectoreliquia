

// CONTADOR DE CARACTERES
function countChars(obj) {
    var maxLength = 200;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);

    if (charRemain < 0) {
        document.getElementById("charNum").innerHTML = '<span style="color: red;">Exediste el límite de ' + maxLength + ' caracteres</span>';
    }
    else {
        document.getElementById("charNum").innerHTML = charRemain + ' caracteres restantes';
    }
};

// VALIDAR EMAIL SOBRE LA MARCHA
document.getElementById('Email').addEventListener('input', function () {
    campo = event.target;
    valido = document.getElementById('emailOK');
    
    const emailRegex = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, "gm");

    if (emailRegex.test(campo.value)) {
        valido.innerText = " correcto";
    }
    else {
        valido.innerText = " incorrecto";

    }
});

// VALIDAR INPUTS DE CONTACTO
function validacion() {
    var formulario = document.getElementById("contacto");
    var Fullname = document.getElementById('Fullname').validity.valid;
    var Email = document.getElementById('Email').validity.patternMismatch;
    var Msg = document.getElementById('Msg').validity.valid

    if (Fullname && Email && Msg) {
        alert("Enviando el formulario");
        formulario.submit();
        return true;
    }
    else {
        if (!Fullname) {
            alert('Valor "Nombre" incorrecto, debe cumplir las condiciones (Nombre Apellido)');
            return false;
        }
        else if (!Email) {
            alert('Valor "Email" incorrecto, debe ser un email de formato válido!');
            return false;
        }

    }
}