function filterTeam() {
    const team = document.getElementById('team-selector').value;
    const allImages = document.querySelectorAll('.card-img');
    
    allImages.forEach(img => {
        img.style.display = 'none';
    });
    
    const selectedTeamImages = document.querySelectorAll('.' + team);
    selectedTeamImages.forEach(img => {
        img.style.display = 'block';
    });
}

function flipCardMobile() {
    const card = document.getElementById('flip-inner-mobile');
    if (card) {
        card.classList.toggle('is-flipped');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-registro');
    const modal = document.getElementById('modal-gracias');
    const btnCerrar = document.getElementById('btn-cerrar-modal');
    const tituloGracias = document.getElementById('titulo-gracias');

    // --- Lógica del Modal ---
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const nombreInput = document.getElementById('nombre-usuario');
            if (nombreInput && nombreInput.value.trim() !== "") {
                const primerNombre = nombreInput.value.trim().split(' ')[0];
                tituloGracias.textContent = `¡Ya estás participando, ${primerNombre}!`;
            } else {
                tituloGracias.textContent = `¡Ya estás participando!`;
            }

            modal.style.display = 'flex';
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', function() {
            modal.style.display = 'none';
            form.reset(); 
        });
    }

    // --- Lógica del Carrusel Drag-to-Scroll ---
    const slider = document.querySelector('.carousel');
    
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; 
            
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});

function flipCardPC() {
    const card = document.getElementById('flip-inner-pc');

    if (card) {
        card.classList.toggle('is-flipped');
    }
}