document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle for mobile view
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Parallax effect
   // document.addEventListener('scroll', function() {
   //     const sections = document.querySelectorAll('.parallax');
    //    sections.forEach(function(section) {
   //         const scrolled = window.pageYOffset;
  //          const rate = scrolled * 0.2; // Reduzindo a quantidade de deslocamento
   //         section.style.transform = `translateY(${rate}px)`;
  //      });
  //  });
});
