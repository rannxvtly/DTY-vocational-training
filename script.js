/**
 * ==========================================================================
 * INTERACTIVE SCRIPT FOR MODERN INDUSTRIAL WEBSITE
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. NAVBAR SCROLL EFFECT (Mengecilkan navbar saat halaman di-scroll)
    const navbar = document.getElementById("navigasiUtama");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-sm", "py-2");
            navbar.classList.remove("py-3");
            // Mengubah background sedikit lebih solid saat di-scroll down
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
        } else {
            navbar.classList.remove("shadow-sm", "py-2");
            navbar.classList.add("py-3");
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        }
    });

    // 2. AUTO CLOSE NAVBAR IN MOBILE (Menutup menu dynamic setelah link diklik di HP)
    const navLinks = document.querySelectorAll("#navigasiUtama .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Memeriksa apakah menu hamburger sedang terbuka (terlihat di layar mobile)
            if (navbarCollapse.classList.contains("show")) {
                // Memicu klik pada tombol toggler untuk menutupnya kembali
                document.querySelector(".navbar-toggler").click();
            }
        });
    });

    // 3. CONTACT FORM INTERACTION & VALIDATION (Simulasi Pengiriman Pesan)
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // Mencegah form melakukan reload halaman secara default
            event.preventDefault();

            // Mengambil value dari input
            const nama = document.getElementById("nama") ? document.getElementById("nama").value.trim() : "";
            const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
            const pesan = document.getElementById("pesan") ? document.getElementById("pesan").value.trim() : "";

            // Validasi Sederhana
            if (nama === "" || email === "" || pesan === "") {
                alert("Mohon lengkapi semua kolom form sebelum mengirim.");
                return;
            }

            // Simulasi Efek Loading pada Tombol
            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Mengirim...';

            // Mengirimkan notifikasi sukses setelah delay 1.5 detik (Simulasi API)
            setTimeout(function () {
                alert(`Terima kasih, ${nama}! Pesan Anda telah berhasil terkirim. Kami akan segera menghubungi Anda.`);
                
                // Reset form dan tombol kembali semula
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1500);
        });
    }

    // 4. SMOOTH ACCORDION FOCUS (Menggulung layar otomatis agar konten accordion terlihat jelas)
    const accordionItems = document.querySelectorAll(".accordion-button");
    
    accordionItems.forEach(function (button) {
        button.addEventListener("click", function () {
            // Memberikan sedikit jeda nunggu animasi buka accordion selesai
            setTimeout(() => {
                if (!button.classList.contains("collapsed")) {
                    button.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }
            }, 300);
        });
    });

});