const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const toggleModebtn = document.querySelector('input[type="checkbox"]');
const toggleText = document.querySelector('.toggle-text');
const toggleIcon = document.querySelector('.fa-sun');
const textBox = document.querySelector('.text-box');



function lightMode() {
    document.documentElement.removeAttribute('data-theme', 'dark');
    toggleText.textContent = 'Light Mode';
    toggleIcon.classList.replace('fa-moon', 'fa-sun');
    img1.src = "undraw_proud_coder_light.svg";
    img2.src = "undraw_conceptual_idea_light.svg";
    img3.src = "undraw_feeling_proud_light.svg";
    localStorage.setItem('theme', 'light');
    toggleModebtn.checked = false;
}
function darkMode() {

    document.documentElement.setAttribute('data-theme', 'dark');
    toggleText.textContent = 'Dark Mode';
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
    img1.src = "undraw_proud_coder_dark.svg";
    img2.src = "undraw_conceptual_idea_dark.svg";
    img3.src = "undraw_feeling_proud_dark.svg";
    localStorage.setItem('theme', 'dark');
    toggleModebtn.checked = true;
}
function switchTheme() {
    toggleModebtn.addEventListener('change', function (e) {
        if (e.target.checked === true) { darkMode(); }
        else { lightMode(); }
    })
}
const theme = localStorage.getItem('theme');
function currentTheme(theme) {
    switchTheme();
    if (theme === 'dark') {
        darkMode();

    } else if (theme === 'light') {
        lightMode();

    }
}
currentTheme(theme);
