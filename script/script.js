const themeCheckbox = document.querySelector('.toggle-checkbox');
const body = document.body;

themeCheckbox.addEventListener('change', () => {
    body.classList.toggle('dark-mode', themeCheckbox.checked);
});
