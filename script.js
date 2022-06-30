const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        //let marca = document.getElementById('marca').value;
        //let redes = document.getElementById('redes').value;
        //let info = document.getElementById('info').value;
        //let direcciones = document.getElementById('direcciones').value;
        //let telefono = document.getElementById('telefono').value;
        //let entrega = document.getElementById('entrega').value;

        //let mensaje = document.getElementById('mensaje').value;
        let numero= 5491140949936;
        
var win= window.open(`https://wa.me/${numero}?text=
Hola%20soy%20*${nombre}*%20y%20quiero%20Suscribir%20me%20a%20la%20revista,%20Gracias.
`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)