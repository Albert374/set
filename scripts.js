document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;

    emailjs.send('service_n0toocd', 'template_avf7ioc', {
        nombre: nombre,
        telefono: telefono
    }).then(function(response) {
        console.log('Éxito!', response.status);
        document.getElementById('mensaje-enviado').style.display = 'block'; 
        document.getElementById('registroForm').reset(); 

        // Cambiar de sección
        document.getElementById('registro').style.display = 'none'; 
        document.getElementById('seccionPrincipal').style.display = 'block'; 
    }, function(error) {
        console.log('Error:', error);
        document.getElementById('mensaje-error').style.display = 'block'; 
    });
});

// Inicializar EmailJS
emailjs.init('clcXbpntO9q4ne1tt');
