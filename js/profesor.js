let usuario = document.getElementById("inicioDocumento");
let password = document.getElementById("inicioContraseña");

let boton = document.getElementById("enviarInicio")
boton.addEventListener("click",()=> {
    // Verificar las credenciales ingresadas
    if (usuario.value === "adso2556678" && password.value === "adso2023") {
       alert("Bienvenido")
       miModal.style.display = "none";
    } else {
      alert("Correo electrónico o contraseña incorrectos");
    }
  });



const roles=parseInt(prompt( "introduzca su rol 1=estudiante , 2=profesor , 3=administrador")) ;

if (roles==2){
    const a=document.querySelector('.d-block')
    a.textContent="Trabaja con nosotros en la modalidad que tu desees";
    const x=document.querySelector('.d-block2')
    x.textContent="puedes contraofertar las solicitudes de los usuarios";
    const y=document.querySelector('.d-block3')
    y.textContent="Genera ingresos con nuestra app";
    const n=document.querySelector('.title1')
    n.textContent="Puedes calificar el comportamiento de los usuarios en las clase";
    const t=document.querySelector('.text1')
    t.textContent="tanto el docente como el usuario que solicitara la clase al finalizar tendra que calificar";
    const tit=document.querySelector('.title3');
    tit.textContent="Contraoferta las solicitudes de los usuarios";
    const text=document.querySelector('.text3');
    text.textContent="ofertale al usuario un valor que te parezca mas adecuado para ti o una hora diferente en la que estes disponible";
    const j=document.querySelector('.title2');
    j.textContent="Gana ingresos adicionales con nuestra App";
    const m=document.querySelector('.text2');
    m.textContent="con educatio ganaras ingresos adicionales con los servicios que tomes en el mes";
    const b=document.querySelector('.big');
    b.textContent="Descarga nuestra aplicacion mobil recuerda que para postularte a una clase ya sea presencial o virtual tienes que iniciar sesion y registrarte como docente y postularse para  la clase mediante nuestra App mobil, nuestro sitio web te permitira conocer mas sobre nosotros y ver informacion de tu cuenta y de los servicios que haz tomado";
    const man=document.querySelector('.heading-5-font-weight-normal');
    man.textContent="Postulate a las solicitudes de clases con confianza";
    document.querySelector(".")
}
else if(roles==3){
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
