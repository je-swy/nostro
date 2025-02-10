const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  let requestBtn = document.querySelector(".request-call-btn");

  if (window.innerWidth >= 768) { // Тільки для десктопа
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
      requestBtn.style.display = "block"; // Показуємо кнопку
      
    } else {
      navbar.classList.remove("sticky");
      requestBtn.style.display = "none"; // Ховаємо кнопку
    }
  } else {
    navbar.classList.remove("sticky");
    requestBtn.style.display = "none";
  }
});

document.querySelectorAll('.accordion-title').forEach(button => {
  button.addEventListener('click', () => {
      button.classList.toggle('active');
      let content = button.nextElementSibling;
      if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.style.padding = "0 15px";
      } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = "15px";
      }
  });
});

const scrollContainer = document.getElementById("scroll-container");
const progressBar = document.getElementById("scroll-progress-bar");
const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

const scrollAmount = 300; // Скільки пікселів прокручувати за раз

// Оновлення прогрес-бара
function updateProgressBar() {
  const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const scrollLeft = scrollContainer.scrollLeft;
  const progress = (scrollLeft / scrollWidth) * 100;
  progressBar.style.width = `${progress}%`;
}

// Обробники подій для кнопок
scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// Оновлення прогрес-бара під час скролу
scrollContainer.addEventListener("scroll", updateProgressBar);
