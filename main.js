document.getElementById('miBtn').addEventListener('click', function() {
    guardarDatos()
});


function guardarDatos(){
    let correo = document.getElementById('correo').value
    let password = document.getElementById('password').value

    let datos = { correo: correo, contra: password}
    console.log(datos);
    guardarDatosNetlify(datos)
}


function guardarDatosNetlify(datos){

    console.log(datos);
    
    
    fetch("/.netlify/functions/guardar", {
    method: "POST",
    body: JSON.stringify(datos),
        })
    .then(res => res.json())
    .then(data => console.log("Respuesta:", data));

}
