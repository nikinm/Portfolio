let navButtons = document.querySelectorAll('.about__nav_element');
let aboutSections = document.querySelectorAll('.about__div');

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Usuwanie aktywnej klasy z wszystkich przycisków
        navButtons.forEach(btn => {
            btn.classList.remove('about__nav_element_active');
        });
        // Dodanie aktywnej klasy do klikniętego przycisku
        button.classList.add('about__nav_element_active');

        // Ukrywanie wszystkich sekcji
        aboutSections.forEach(section => {
            section.style.display = 'none';
        });

        // Wyświetlanie odpowiedniej sekcji
        aboutSections[index].style.display = 'block';
    });
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

function menu() {
    let nav = document.querySelector(".nav__list");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
}