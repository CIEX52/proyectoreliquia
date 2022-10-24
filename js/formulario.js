const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	firstname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	tel: /^\d{7,14}$/, // 7 a 14 numeros.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    firstname: false,
    lastname: false,
    tel: false,
    email: false
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
};


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "firstname":
            validarCampo(expresiones.firstname, e.target, 'firstname');
        break;
        case "lastname":
            validarCampo(expresiones.lastname, e.target, 'lastname');
        break;
        case "tel":
            validarCampo(expresiones.tel, e.target, 'tel');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

async function handleSubmit(e) {
    e.preventDefault();

    if(campos.firstname && campos.lastname && campos.tel && campos.email) {
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers:{
                'Accept': 'application/json'
            }
        });
        if (response.ok){
            formulario.reset();
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);
            campos.firstname=false;
            campos.lastname=false;
            campos.tel=false;
            campos.email=false;
        }else {
            alert('Error en el envío del mensaje');
        }

        
    } 
    else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
};

formulario.addEventListener('submit', handleSubmit);

formulario.addEventListener('reset', () => {
    for (const campo in campos) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    }
});