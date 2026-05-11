// 1. Filtro de jugadores (Carrusel)
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

// 2. Giro de la cancha en móviles
function flipCardMobile() {
    const card = document.getElementById('flip-inner-mobile');
    if (card) {
        card.classList.toggle('is-flipped');
    }
}

// 3. Manejo del Formulario y Modal
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-registro');
    const modal = document.getElementById('modal-gracias');
    const btnCerrar = document.getElementById('btn-cerrar-modal');
    const tituloGracias = document.getElementById('titulo-gracias');

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

            // Mostramos el modal
            modal.style.display = 'flex';
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', function() {
            modal.style.display = 'none';
            form.reset(); 
        });
    }
});