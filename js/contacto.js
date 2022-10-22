// RESET FORM
function myFunction() {
if (document.getElementById(Name) === "")
    document.getElementById("contacto").reset();
};

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

// VALIDAR EMAIL
document.getElementById('Email').addEventListener('input', function () {
campo = event.target;
valido = document.getElementById('emailOK');

emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

if (emailRegex.test(campo.value)) {
    valido.innerText = " correcto";
}
else {
    valido.innerText = " incorrecto";
}
});

