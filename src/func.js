document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('carouselExampleControls');
    var title = document.getElementById('carouselTitle');
    var description = document.getElementById('carouselDescription');
    var slides = carousel.querySelectorAll('.carousel-item');

    // Funzione per aggiornare il titolo e la descrizione
    function updateTitleAndDescription(index) {
        switch (index) {
            case 0:
                title.textContent = 'TAVOLA DA SURF NSP FUNBOARD PROTECH';
                description.textContent = 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.';
                break;
            case 1:
                title.textContent = 'TAVOLA DA SURF SOUL EVOLUTION';
                description.textContent = 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.';
                break;
            case 2:
                title.textContent = 'TAVOLA DA SURF SIMON ANDERSON MOLLUSCO ROBO';
                description.textContent = 'emporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';
                break;
            default:
                title.textContent = 'TAVOLA DA SURF NSP FUNBOARD PROTECH';
                description.textContent = 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.';
                break;
        }
    }

    // Aggiorna il titolo e la descrizione quando cambia la slide
    carousel.addEventListener('slid.bs.carousel', function() {
        var activeSlide = carousel.querySelector('.carousel-item.active');
        var index = Array.from(slides).indexOf(activeSlide);
        updateTitleAndDescription(index);
    });

    // Aggiorna il titolo e la descrizione quando si fa clic sul pulsante "Description"
    var descriptionButton = document.getElementById('descriptionButton');
    descriptionButton.addEventListener('click', function() {
        var activeSlide = carousel.querySelector('.carousel-item.active');
        var index = Array.from(slides).indexOf(activeSlide);
        updateTitleAndDescription(index);
    });
});

let touchstartX = 0;
        let touchendX = 0;

        const carousel = document.getElementById('carouselExampleControls');

        carousel.addEventListener('touchstart', function (event) {
            touchstartX = event.touches[0].clientX;
        }, false);

        carousel.addEventListener('touchend', function (event) {
            touchendX = event.changedTouches[0].clientX;
            handleGesture();
        }, false);

        function handleGesture() {
            if (touchendX < touchstartX) {
                // Swipe verso sinistra (avanti)
                $('.carousel').carousel('next');
            }

            if (touchendX > touchstartX) {
                // Swipe verso destra (indietro)
                $('.carousel').carousel('prev');
            }
        }
