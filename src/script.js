document.getElementById('emailForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Recupera i valori dai campi del modulo HTML
    const name = document.getElementById('name').value;
    const birthplace = document.getElementById('birthplace').value;
    const phone = document.getElementById('phone').value;
    const recipientEmail = document.getElementById('recipientEmail').value;

    try {
        const response = await fetch('/invia-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                birthplace: birthplace,
                phone: phone,
                recipientEmail: recipientEmail
            })
        });

        if (response.ok) {
            alert('Email inviata con successo!');
        } else {
            console.error('Errore nella richiesta:', response.statusText);
        }
    } catch (error) {
        console.error('Errore nella richiesta:', error);
    }
});

document.getElementById('recipientEmail').addEventListener('input', function() {
    if (!this.validity.valid) {
        this.setCustomValidity('Inserisci un indirizzo email valido.');
    } else {
        this.setCustomValidity('');
    }
});
