// Placeholder for any JavaScript if you plan to add interactive features
// Example: Smooth scroll to sections

document.querySelectorAll('a.program__button').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
