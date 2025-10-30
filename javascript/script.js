// Script simple para resaltar el enlace activo en el menú
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("nav a");

  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  menuLinks.forEach((link) => link.classList.remove("active"));
  menuLinks[index].classList.add("active");
});

// ===== Carrusel de imágenes =====
const carruselContenedor = document.querySelector(".carrusel-contenedor");
const carruselItems = document.querySelectorAll(".carrusel-item");
const prevBtn = document.querySelector(".carrusel-btn.prev");
const nextBtn = document.querySelector(".carrusel-btn.next");

let indexCarrusel = 0;

// Función que muestra la imagen correspondiente
function mostrarCarrusel(index) {
  if (index < 0) {
    indexCarrusel = carruselItems.length - 1;
  } else if (index >= carruselItems.length) {
    indexCarrusel = 0;
  } else {
    indexCarrusel = index;
  }

  carruselContenedor.style.transform = `translateX(${-indexCarrusel * 100}%)`;
}

// Botones de navegación
prevBtn.addEventListener("click", () => {
  mostrarCarrusel(indexCarrusel - 1);
});

nextBtn.addEventListener("click", () => {
  mostrarCarrusel(indexCarrusel + 1);
});

// Cambio automático cada 5 segundos
setInterval(() => {
  mostrarCarrusel(indexCarrusel + 1);
}, 5000);

// Inicializar carrusel al cargar
mostrarCarrusel(0);
