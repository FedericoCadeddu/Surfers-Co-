#SURFERS CO PROG

##DESCRIZIONE

Il progetto è un'applicazione web che sfrutta Node.js insieme al framework Express per il lato back-end. Utilizzando un server locale su Node.js eseguito sulla porta 3000, il sistema si appoggia alla piattaforma Google Cloud e alle relative credenziali di OAuth 2.0 per autenticazione e autorizzazione. 

Per la gestione dell'invio delle email, il progetto si avvale di Nodemailer, una libreria Node.js che semplifica il processo di invio delle email tramite protocolli SMTP. Grazie a questa implementazione, il sistema è in grado di comunicare in modo efficace con gli utenti attraverso l'invio di email automatizzate.

Per quanto riguarda il lato front-end, l'applicazione è stata sviluppata utilizzando HTML, CSS e JavaScript. HTML e CSS sono stati utilizzati per definire la struttura e lo stile dell'interfaccia utente, mentre JavaScript è stato impiegato per la gestione delle interazioni utente e la comunicazione con il back-end. Per il bundle e l'ottimizzazione ho usato webpack.

##INSTALLAZIONE

Per nodemailer:

npm install nodemailer

Per express e la sua configurazione:

npm install express

configurazione:

const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})


##Per GoogleCloud:

Servono le credenziali e account gmail.

Impostare le variabili d'ambiente:
MAIL_USERNAME=
MAIL_PASSWORD=
OAUTH_CLIENTID=
OAUTH_CLIENT_SECRET=
OAUTH_REFRESH_TOKEN=
OAUTH_ACCESS_TOKEN=



##UTILIZZO

I link, essendo un homepage e basta rimandano o alle sezioni della pagina stessa o al menu. L'interattività è gestita da javascript
e si limita al controllo delle descrizioni nel carousel e alla comunicazione con il back-end index.js per la compilazione del form.

Il responsive è presente, dando priorità al mobile.


##VERSIONI UTILIZZATE

-node v20.11.1
-Bootstrap 5
-Express 4.18.3
-nodemailer 6.9.11