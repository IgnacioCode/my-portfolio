function scrollToElement(elementId) {
    var elemento = document.getElementById(elementId);
  
    // Desactivar temporariamente el scroll suave
    document.body.style.scrollBehavior = 'auto';
  
    // Hacer scroll al elemento
    elemento.scrollIntoView({ behavior: 'smooth' });
  
    // Volver a activar el scroll suave después de un breve retraso
    setTimeout(function() {
      document.body.style.scrollBehavior = 'smooth';
    }, 1000); // Ajusta el valor del tiempo según sea necesario
  }


async function sendEmail(){
    const nombreUsuario = document.getElementById('username').value;
    const msgExito = document.getElementById('msg-exito');
    textoCorreo = document.getElementById('emailText').value;

    textoCorreo = 'Hola soy ' + nombreUsuario + ', ' + textoCorreo;
    

      try {
        const response = await fetch('http://15.229.23.147:3000/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: textoCorreo }),
        });

        if (response.ok) {
          console.log('Correo electrónico enviado con éxito.');
          msgExito.style.display = 'inline';
        } else {
          console.error('Error al enviar el correo electrónico.');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
}