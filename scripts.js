(function(){
    emailjs.init("clcXbpntO9q4ne1tt"); 
})();

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    emailjs.sendForm('service_n0toocd', 'template_avf7ioc', this)
        .then(function() {
            alert('Correo enviado exitosamente!');
        }, function(error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});
