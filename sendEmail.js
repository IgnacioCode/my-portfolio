const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'portfolio.email.service1@gmail.com',
    pass: 'rirh pumc srai sqep',
  },
});

// Endpoint para enviar correos electrónicos
app.post('/sendEmail', (req, res) => {
  const { text } = req.body;

  // Configuración del correo electrónico
  const mailOptions = {
    from: 'portfolio.email.service1@gmail.com',
    to: 'nachoromero84@hotmail.com',
    subject: 'Portafolio Contacto',
    text: text,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).send('Error al enviar el correo electrónico.');
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.status(200).send('Correo electrónico enviado con éxito.');
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
