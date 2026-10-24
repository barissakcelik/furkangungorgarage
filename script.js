// Sayfa aşağı kaydırıldıkça elementlerin belirmesi (Scroll Animation)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        }
    });
}, {
    threshold: 0.1 // Elementin %10'u göründüğünde animasyonu başlat
});

const hiddenElements = document.querySelectorAll('.hidden-animate');
hiddenElements.forEach((el) => observer.observe(el));

// Navbar arkaplanının scroll yapınca koyulaşması
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 1)';
        navbar.style.boxShadow = '0 2px 10px rgba(230, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});