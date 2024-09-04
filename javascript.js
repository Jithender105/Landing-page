// Add event listener to the button in the hero section
document.querySelector('#hero button').addEventListener('click', () => {
    // Scroll to the about section
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});