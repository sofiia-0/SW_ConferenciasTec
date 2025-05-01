let currentIndex = 0; // Índice actual del slide activo en el carrusel

const slides = document.querySelectorAll('.carousel-item'); // Selecciona todos los elementos del carrusel

// Función para mover el carrusel hacia adelante o atrás
function moveSlide(step) {
    currentIndex += step; // Actualiza el índice actual
    if (currentIndex < 0) { // Si el índice es menor que 0, vuelve al último slide
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) { // Si el índice supera el último slide, vuelve al primero
        currentIndex = 0;
    }
    updateCarousel(); // Actualiza la vista del carrusel
}

// Función para actualizar la vista del carrusel
function updateCarousel() {
    slides.forEach(slide => slide.classList.remove('active')); // Quita la clase 'active' de todos los slides
    slides[currentIndex].classList.add('active'); // Agrega la clase 'active' al slide actual
    const carouselItems = document.querySelector('.carousel-items'); // Contenedor de los slides
    carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`; // Mueve el carrusel al slide actual
}

// Actualiza el carrusel al cargar la página
document.addEventListener('DOMContentLoaded', updateCarousel);

// Código relacionado con el formulario de registro
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm'); // Formulario de registro
    const confirmationMessage = document.getElementById('confirmationMessage'); // Mensaje de confirmación
    const checkboxes = document.querySelectorAll('input[name="events"]'); // Checkboxes de eventos
    const selectedConferences = document.getElementById('selectedConferences'); // Contenedor de conferencias seleccionadas

    // Función para actualizar la lista de conferencias seleccionadas
    function updateSelectedConferences() {
        const selected = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) { // Si el checkbox está marcado, agrega su valor a la lista
                selected.push(checkbox.value);
            }
        });

        // Muestra las conferencias seleccionadas o un mensaje indicando que no hay ninguna
        if (selected.length > 0) {
            selectedConferences.innerHTML = `<strong>Conferencias seleccionadas:</strong> ${selected.join(', ')}`;
        } else {
            selectedConferences.innerHTML = `<strong>Conferencias seleccionadas:</strong> Ninguna`;
        }
    }

    // Agrega un evento a cada checkbox para actualizar la lista al cambiar su estado
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedConferences);
    });

    updateSelectedConferences(); // Actualiza la lista al cargar la página

    // Maneja el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío por defecto del formulario
        confirmationMessage.style.display = 'block'; // Muestra el mensaje de confirmación
        form.reset(); // Reinicia el formulario
        updateSelectedConferences(); // Actualiza la lista de conferencias seleccionadas
    });
});
