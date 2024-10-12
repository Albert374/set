document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;

    emailjs.send("service_n0toocd", "template_avf7ioc", {
        nombre: nombre,
        telefono: telefono
    }).then(function(response) {
        console.log('Éxito!', response.status);
        document.getElementById('mensaje-enviado').style.display = 'block'; // Mensaje de éxito
        document.getElementById('registroForm').reset(); // Limpiar formulario

        // Cambiar de sección
        document.getElementById('registro').style.display = 'none'; // Oculta el registro
        document.getElementById('seccionPrincipal').style.display = 'block'; // Muestra la sección principal
    }, function(error) {
        console.log('Error:', error);
        document.getElementById('mensaje-error').style.display = 'block'; // Mensaje de error
    });
});

// Inicializar EmailJS
emailjs.init("clcXbpntO9q4ne1tt"); // Reemplaza con tu Public Key
