const formulario = document.getElementById("formulario");

const inputs = document.querySelectorAll("#formulario input");

const texto = document.querySelector("#formulario textarea");

const expresiones = {
   apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   telefono: /^\d{7,14}$/,
   mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const campos = {
   nombre: false,
   apellido: false, 
   email: false,
   telefono: false,
   mensaje: false
}

const validarFormulario = (e) => {
switch (e.target.name) {
   case "nombre":
     formCorrecto (expresiones.nombre, e.target, "nombre");
   break;
   case "apellido":
      formCorrecto (expresiones.apellido, e.target, "apellido");
   break;
   case "email":
      formCorrecto (expresiones.email, e.target, "email");
   break;
   case "telefono":
      formCorrecto (expresiones.telefono, e.target, "telefono");
   break;
   case "mensaje":
      formCorrecto2 (expresiones.mensaje, e.target, "mensaje");
   break;
   }
}

const formCorrecto = (expresion, input, campo) => {
   if(expresion.test(input.value)){
      document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-mal");
      document.getElementById(`grupo__${campo}`).classList.add("form__grupo-bien");
      document.querySelector(`#grupo__${campo} .form__error-input`).classList.remove("form__error-input-activo");
      campos[campo] = true;
   } else {
      document.getElementById(`grupo__${campo}`).classList.add("form__grupo-mal");
      document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-bien");
      document.querySelector(`#grupo__${campo} .form__error-input`).classList.add("form__error-input-activo");
      campos[campo] = false;
   }
}

const formCorrecto2 = (expresion, textarea, campo) => {
   if(expresion.test(textarea.value)){
      document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-mal");
      document.getElementById(`grupo__${campo}`).classList.add("form__grupo-bien");
      document.querySelector(`#grupo__${campo} .form__error-input`).classList.remove("form__error-input-activo");
      campos[campo] = true;
   } else {
      document.getElementById(`grupo__${campo}`).classList.add("form__grupo-mal");
      document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-bien");
      document.querySelector(`#grupo__${campo} .form__error-input`).classList.add("form__error-input-activo");
      campos[campo] = false;
   }
}

inputs.forEach((input) => {
   input.addEventListener('keyup', validarFormulario);
   input.addEventListener('blur', validarFormulario);
});

texto.forEach((textarea) => {
      textarea.addEventListener('keyup', validarFormulario);
      textarea.addEventListener('blur', validarFormulario);
   });


formulario.addEventListener('submit', (e) => {
   e.preventDefault();

   
   const terminos = document.getElementById("terminos");
	if(campos.nombre && campos.apellido && campos.email && campos.telefono && campos.mensaje && terminos.checked ){
		formulario.reset();

		document.getElementById("form__exito").classList.add("form__exito-activo");
		setTimeout(() => {
			document.getElementById("form__exito").classList.remove("form__exito-activo");
		}, 5000); 
	} else {
		document.getElementById("form_error-mensaje").classList.add("form_error-mensaje-activo");
	}
});























