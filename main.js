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
  