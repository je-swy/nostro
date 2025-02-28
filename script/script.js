
//header navigation mobile
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open")
  menuBtnIcon.setAttribute("class", "ri-menu-line")
});

//header sticky navigation
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  let requestBtn = document.querySelector(".request-call-btn");

  if (window.innerWidth >= 768) { // desctop only
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
      // navbar.classList.remove("container");
      requestBtn.style.display = "block"; 
      
    } else {
      navbar.classList.remove("sticky");
      // navbar.classList.add("container");
      requestBtn.style.display = "none"; 
    }
  } else {
    navbar.classList.remove("sticky");
    requestBtn.style.display = "none";
  }
});

//accordion in section profit

// document.querySelectorAll('.accordion-title').forEach(button => {
//   button.addEventListener('click', function() {
//       const item = this.parentElement;
//       item.classList.toggle('active');
//   });
// });

// norm variant
// document.querySelectorAll('.accordion-title').forEach(button => {
//   button.addEventListener('click', function() {
//       const item = this.parentElement;
//       const isActive = item.classList.contains('active');
      
//       document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      
//       if (!isActive) {
//           item.classList.add('active');
//       }
//   });
// });

document.querySelectorAll('.accordion-title').forEach(button => {
  button.addEventListener('click', function () {
    const item = this.parentElement;
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(i => {
      const c = i.querySelector('.accordion-content');
      i.classList.remove('active');
      c.style.height = '0px';
      c.style.overflow = 'hidden';
      c.style.paddingTop = '0px';
      c.style.paddingBottom = '0px';
    });

    if (!isActive) {
      item.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
      content.style.overflow = 'visible'; 
      content.style.paddingTop = '2px';
      content.style.paddingBottom = '2px';
    }
  });
});

// document.querySelectorAll('.accordion-title').forEach(button => {
//   button.addEventListener('click', () => {
//       button.classList.toggle('active');
//       let content = button.nextElementSibling;
//       if (content.style.maxHeight) {
//           content.style.maxHeight = null;
//           content.style.padding = "0 15px";
//       } else {
//           content.style.maxHeight = content.scrollHeight + "px";
//           content.style.padding = "15px";
//       }
//   });
// });

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
