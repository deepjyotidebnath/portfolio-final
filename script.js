// Footer year
document.getElementById('y').textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    revealEls.forEach((el) => io.observe(el));
} else {
    // Fallback for older browsers
    revealEls.forEach((el) => el.classList.add('show'));
}