// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section.content');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 애니메이션이 한 번만 발생하도록 설정
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
