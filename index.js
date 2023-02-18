

  
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	clave: /^.{8,12}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
const campos = {
    nombre: false,
    email: false,
    clave: false
}
    
    
const validarFormulario = (e) => {
   switch (e.target.name){
           case: "nombre":
               validarCampo(expresiones.nombre, e.target, 'nombre');
   }
                break;
           
           case: "email":
                validarCampo(expresiones.email, e.target, 'email');
                break;
           
           case: "clave":
               validarCampo(expresiones.clave, e.target, 'clave');
                validarClave2();
                break;
           
            case: "clave2":
                validarCampo(expresiones.clave2, e.target, 'clave2');
                    validarClave2
                break;          

                    
   }
}

const validarCampo = (expresion, input, campo) => {
    
    if(expresion.test(input.value)){
                   document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
                   document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
                   document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
                   document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-check');
                document.querySelector('#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
                campos[campo] = true;
               } 
           else{
               document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
               document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
               document.querySelector(`#grupo__${campo} i`).classList.add('fa-ta-times-circle');
               document.querySelector(`#grupo__${campo} i`).classList.remove(`fa-check-circle');
               document.querySelector('#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
                 campos [campo] = false;
               }
}
const validarClave2 = () => {
              const inputClave = document.getElementById('clave');  
            const inputClave2 = document.getElementById('clave2');
            if (inputClave.value !== inputClave2.value){
               
                if(inputClave.test !== inputClave2.value){
                   document.getElementById(`grupo__clave2`).classList.remove('formulario__grupo-incorrecto');
                   document.getElementById(`grupo__clave2`).classList.remove('formulario__grupo-correcto');
                   document.querySelector(`#grupo__clave2 i`).classList.remove('fa-times-circle');
                   document.querySelector(`#grupo__clave2 i`).classList.add('fa-times-check');
                document.querySelector('#grupo__clave2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
                   campos ['clave'] = false;                    
               } else{
                 document.getElementById(`grupo__clave2`).classList.remove('formulario__grupo-incorrecto');
                   document.getElementById(`grupo__clave2`).classList.add('formulario__grupo-correcto');
                   document.querySelector(`#grupo__clave2 i`).classList.remove('fa-times-circle');
                   document.querySelector(`#grupo__clave2 i`).classList.add('fa-times-check');
                document.querySelector('#grupo__clave2 .formulario__input-error`).classList.add('formulario__input-error-activo');   
                        campos ['clave'] = true;                 
                }
                                       
                }        
            
                }
                                       
    

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
     input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', () =>{
    e.preventDefault();
  
    if(campos.nombre && campos.email && campos.clave){
        formulario.reset()
        
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
             document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);
        
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
  
});