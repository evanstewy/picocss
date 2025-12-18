function toggleMenu() {
  const nav = document.getElementById('nav-links');
  const burger = document.querySelector('.burger-menu');
  nav.classList.toggle('open');
  
  if (nav.classList.contains('open')) {
    burger.innerHTML = '✕';
    document.body.style.overflow = 'hidden'; // Stops the background text from moving
  } else {
    burger.innerHTML = '☰';
    document.body.style.overflow = 'auto';
  }
}