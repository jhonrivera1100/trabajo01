

// boton.addEventListener("click",()=> {
//     // Verificar las credenciales ingresadas
//     if (email.value === "Docente123" && password.value === "1234567") {
//        alert("Bienvenido")
//        miModal.style.display = "none";
//     } else if(email.value === "" && password.value === ""){
//       alert("Tienes espacios en blanco");
//     }
//     else if(email.value==="estudiante123" && password.value === "12345"){
//     alert("bienvenido estudiante")}});




// document.getElementById("boton").addEventListener("click", function(event) {
//   event.preventDefault(); // Evitar que el formulario se envíe automáticamente

//   let email = document.getElementById("user").value;
//   let password = document.getElementById("password").value;

//   // Validar que no haya espacios en blanco en el email y contraseña
//   if (email.trim() === "" || password.trim() === "") {
//     alert("No se permiten espacios en blanco en el usuario o contraseña");
//     return; 
//   }

//   // Validar las credenciales ingresadas
//   if (email === "docente123" && password === "12345678") {
//     alert("Bienvenido");
//     // Cerrar el modal si se ingresaron credenciales correctas
//     let modalElement = document.getElementById("exampleModal");
//     let modalInstance = bootstrap.Modal.getInstance(modalElement);
//     modalInstance.hide();
//     const a=document.querySelector('.d-block')
//     a.textContent="Trabaja con nosotros en la modalidad que tu desees";
//     const x=document.querySelector('.d-block2')
//     x.textContent="puedes contraofertar las solicitudes de los usuarios";
//     const y=document.querySelector('.d-block3')
//     y.textContent="Genera ingresos con nuestra app";
//     const n=document.querySelector('.title1')
//     n.textContent="Puedes calificar el comportamiento de los usuarios en las clase";
//     const t=document.querySelector('.text1')
//     t.textContent="tanto el docente como el usuario que solicitara la clase al finalizar tendra que calificar";
//     const tit=document.querySelector('.title3');
//     tit.textContent="Contraoferta las solicitudes de los usuarios";
//     const text=document.querySelector('.text3');
//     text.textContent="ofertale al usuario un valor que te parezca mas adecuado para ti o una hora diferente en la que estes disponible";
//     const j=document.querySelector('.title2');
//     j.textContent="Gana ingresos adicionales con nuestra App";
//     const m=document.querySelector('.text2');
//     m.textContent="con educatio ganaras ingresos adicionales con los servicios que tomes en el mes";
//     const b=document.querySelector('.big');
//     b.textContent="Descarga nuestra aplicacion mobil recuerda que para postularte a una clase ya sea presencial o virtual tienes que iniciar sesion y registrarte como docente y postularse para  la clase mediante nuestra App mobil, nuestro sitio web te permitira conocer mas sobre nosotros y ver informacion de tu cuenta y de los servicios que haz tomado";
//     const man=document.querySelector('.heading-5-font-weight-normal');
//     man.textContent="Postulate a las solicitudes de clases con confianza";
//     document.querySelector(".")

//   } else {
//     alert("Usuario o contraseña incorrectos");
//   }
// });


document.getElementById("boton").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  let email = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  // Validar que no haya espacios en blanco en el email y contraseña
  if (email.trim() === "" || password.trim() === "") {
    alert("No se permiten espacios en blanco en el usuario o contraseña");
    return; 
  }

  // Validar las credenciales ingresadas
  if (email === "docente123" && password === "12345678") {
    alert("Bienvenido");
    // Cerrar el modal si se ingresaron credenciales correctas
    let modalElement = document.getElementById("exampleModal");
    let modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
    
    // Realizar los cambios en el DOM
    document.querySelector('.d-block').textContent = "BIENVENIDO DOCENTE";
    document.querySelector('.d-block2').textContent = "Puedes contraofertar las solicitudes de los usuarios";
    document.querySelector('.d-block3').textContent = "Genera ingresos con nuestra app";
    document.querySelector('.title1').textContent = "Puedes calificar el comportamiento de los usuarios en las clases";
    document.querySelector('.text1').textContent = "Tanto el docente como el usuario que solicitará la clase al finalizar tendrán que calificar";
    document.querySelector('.title3').textContent = "Contraoferta las solicitudes de los usuarios";
    document.querySelector('.text3').textContent = "Ofrece al usuario un valor que te parezca más adecuado para ti o una hora diferente en la que estés disponible";
    document.querySelector('.title2').textContent = "Gana ingresos adicionales con nuestra App";
    document.querySelector('.text2').textContent = "Con Educatio, podrás ganar ingresos adicionales con los servicios que tomes en el mes";
    document.querySelector('.big').textContent = "Descarga nuestra aplicación móvil. Recuerda que para postularte a una clase, ya sea presencial o virtual, tienes que iniciar sesión y registrarte como docente, y luego postularte para la clase mediante nuestra aplicación móvil. Nuestro sitio web te permitirá conocer más sobre nosotros y ver información de tu cuenta y los servicios que hayas tomado.";
    document.querySelector('.heading-5-font-weight-normal').textContent = "Postúlate a las solicitudes de clases con confianza";
  } 
  else if (email === "administra" && password === "12345678") {
    alert("Bienvenido Administrador");
    // Cerrar el modal si se ingresaron credenciales correctas
    let modalElement = document.getElementById("exampleModal");
    let modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
    const a=document.querySelector('.d-block')
    a.textContent="Bienvenido Administrador";
    const x=document.querySelector('.d-block2')
    x.textContent="puedes hacer las verificaciones pertinentes";
    const y=document.querySelector('.d-block3')
    y.textContent="puedes observar las solicitudes, quejas y comentarios";
    const n=document.querySelector('.title1')
    n.textContent="recuerda los datos que tiene que introducir el docente antes de ser verificado";
    const t=document.querySelector('.text1')
    t.textContent="tiene que introdurcir su hoja de vida y una foto en tiempo real";
    const tit=document.querySelector('.title3');
    tit.textContent="las quejas solicitudes y reclamos las podras ver en la parte de abajo";
    const text=document.querySelector('.text3');
    text.textContent="leelas y informa los problemas existentes en la App";
    const j=document.querySelector('.title2');
    j.textContent="Mantengamos la App en constante mantenimiento";
    const m=document.querySelector('.text2');
    m.textContent="Asi se hara una optimizacion de la App ";
    const b=document.querySelector('.big');
    b.textContent="Descarga nuestra aplicacion mobil recuerda que para postularte a una clase ya sea presencial o virtual tienes que iniciar sesion y registrarte como docente y postularse para  la clase mediante nuestra App mobil, nuestro sitio web te permitira conocer mas sobre nosotros y ver informacion de tu cuenta y de los servicios que haz tomado";
    const man=document.querySelector('.heading-5-font-weight-normal');
    man.textContent="Postulate a las solicitudes de clases con confianza";
  }  
    // Realizar los cambios en el DOM para el usuario "administrador"
  else {
    alert("Usuario o contraseña incorrectos");
  }
  
});

// const roles=parseInt(prompt( "introduzca su rol 1=estudiante , 2=profesor , 3=administrador")) ;

// if (roles==2){
    
// else if(roles==3){
    // const a=document.querySelector('.d-block')
    // a.textContent="Bienvenido Administrador";
    // const x=document.querySelector('.d-block2')
    // x.textContent="puedes hacer las verificaciones pertinentes";
    // const y=document.querySelector('.d-block3')
    // y.textContent="puedes observar las solicitudes, quejas y comentarios";
    // const n=document.querySelector('.title1')
    // n.textContent="recuerda los datos que tiene que introducir el docente antes de ser verificado";
    // const t=document.querySelector('.text1')
    // t.textContent="tiene que introdurcir su hoja de vida y una foto en tiempo real";
    // const tit=document.querySelector('.title3');
    // tit.textContent="las quejas solicitudes y reclamos las podras ver en la parte de abajo";
    // const text=document.querySelector('.text3');
    // text.textContent="leelas y informa los problemas existentes en la App";
    // const j=document.querySelector('.title2');
    // j.textContent="Mantengamos la App en constante mantenimiento";
    // const m=document.querySelector('.text2');
    // m.textContent="Asi se hara una optimizacion de la App ";
    // const b=document.querySelector('.big');
    // b.textContent="Descarga nuestra aplicacion mobil recuerda que para postularte a una clase ya sea presencial o virtual tienes que iniciar sesion y registrarte como docente y postularse para  la clase mediante nuestra App mobil, nuestro sitio web te permitira conocer mas sobre nosotros y ver informacion de tu cuenta y de los servicios que haz tomado";
    // const man=document.querySelector('.heading-5-font-weight-normal');
    // man.textContent="Postulate a las solicitudes de clases con confianza";

// }
