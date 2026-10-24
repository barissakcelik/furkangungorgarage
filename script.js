// Sayfa yüklendiğinde Loader'ı kaldır (Animasyonu izlemek için süre 2 saniye)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }, 2000); 
    }
});

// Scroll Animasyonları
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-anim').forEach((el) => observer.observe(el));

// Navbar Scroll Efekti
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.classList.contains('solid-nav')) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Kartlar için 3D Tilt (Eğilme) Efekti
const tiltCards = document.querySelectorAll('.tilt-card');
if (tiltCards.length > 0) {
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; 
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

// WhatsApp Randevu Formu Gönderme Sistemi
const form = document.getElementById('whatsapp-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Sayfanın yenilenmesini engeller

        // Formdaki verileri çek
        const isim = document.getElementById('isim').value;
        const telefon = document.getElementById('telefon').value;
        const arac = document.getElementById('arac').value;
        const hizmet = document.getElementById('hizmet').value;
        const notlar = document.getElementById('notlar').value;

        // WhatsApp mesaj formatı
        const mesaj = `*YENİ RANDEVU TALEBİ* 🚗🔧\n\n👤 *Ad Soyad:* ${isim}\n📞 *Telefon:* ${telefon}\n🚘 *Araç:* ${arac}\n⚙️ *Hizmet:* ${hizmet}\n📝 *Notlar:* ${notlar ? notlar : 'Belirtilmedi'}`;

        // URL formatına çevir (Boşlukları ve satır atlamalarını kodlar)
        const encodedMesaj = encodeURIComponent(mesaj);
        
        // WhatsApp API linki (Direkt numaranıza gider)
        const whatsappURL = `https://wa.me/905407715561?text=${encodedMesaj}`;

        // Yeni sekmede WhatsApp'ı aç
        window.open(whatsappURL, '_blank');
    });
}