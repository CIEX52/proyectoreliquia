// CONTADOR DE CARACTERES
const mensaje = document.querySelector('#Msg');
const contador = document.querySelector('#contador');
$("#contador").html(`caracteres ${mensaje.value.length}/${mensaje.maxLength}`)

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const lenMax = target.getAttribute('maxlength');
    const lenAct = target.value.length;
    $("#contador").html(`caracteres ${lenAct}/${lenMax}`);
});

// VALIDAR EMAIL SOBRE LA MARCHA
document.getElementById('Email').addEventListener('input', function () {
    campo = event.target;
    valido = document.getElementById('emailOK');
    
    const emailRegex = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, "gm");

    if (emailRegex.test(campo.value)) {
        valido.innerText = " correcto";
        document.getElementById('Email').style.backgroundColor="#c6fabe";
    }
    else {
        valido.innerText = " incorrecto";
        document.getElementById('Email').style.backgroundColor="#fabebe";
    }
});

// VALIDAR INPUTS DE CONTACTO
function validacion() {
    const Fullname = document.getElementById('Fullname').validity.valid;
    const Email = document.getElementById('Email').validity.patternMismatch;
    const Msg = document.getElementById('Msg').validity.valid

    if (Fullname && !Email && Msg) {
        alert("Formulario enviado!!!");
        formulario.submit();
        return true;
    }
    else {
        if (!Fullname) {
            alert('Valor "Nombre" incorrecto, debe cumplir las condiciones (Nombre Apellido)');
            return false;
        }
        else if (Email) {
            alert('Valor "Email" incorrecto, debe ser un email de formato válido!');
            return false;
        }
    }
}