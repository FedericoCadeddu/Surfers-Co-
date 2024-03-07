

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;


dotenv.config();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src'));
app.use(express.json());


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.post('/invia-email', async (req, res) => {
  try {
    // Recupera i dati del form dal corpo della richiesta
    const { name, birthplace, phone, recipientEmail } = req.body;

    const emailBody = `Nome: ${name}\nEmail: ${recipientEmail}\nLuogo di nascita: ${birthplace}\nTelefono: ${phone}`;
    
    //Controllo back-end per i dati
    //if (!name || !birthplace || !phone || !recipientEmail) {
      //return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
  //}

   //Dichiarazione oggetto transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        accessToken: process.env.OAUTH_ACCESS_TOKEN, 
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    });

    //Oggetto mailOptions, contiene i dettagli dell'email come from e to
    let mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: recipientEmail,
      subject: 'Nuovo messaggio dal form',
      text: emailBody
    };
    console.log("mail options: ", mailOptions)

    //Metodo asincrono per l'invio
    let info = await transporter.sendMail(mailOptions);

    console.log('Email inviata:', info.response);
    
    res.redirect('/index.html');
    
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    res.status(500).json({ success: false, error: 'Errore nell\'invio dell\'email' });
  }
});

const mailUsername = process.env.MAIL_USERNAME;

if (!mailUsername) {
  console.error("La variabile d'ambiente MAIL_USERNAME non è stata definita o è vuota.");
} else {
  console.log("Il valore di MAIL_USERNAME è:", mailUsername);
}
