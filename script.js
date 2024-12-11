// script.js

// Alternância de modo claro/escuro
const toggleThemeButton = document.getElementById('toggle-theme');
const toggleViewButton = document.getElementById('toggle-view');

// Marca o botão da página atual como ativo
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


// Alternar tema claro/escuro
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleThemeButton.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Alternar visualização (PC/Telemóvel)
toggleViewButton.addEventListener('click', () => {
    document.body.classList.toggle('mobile-view');
    toggleViewButton.textContent = document.body.classList.contains('mobile-view') ? '📱' : '🖥️';
});

// Mensagem no console para debug
console.log("Site carregado com sucesso! Alternância de temas e visualizações habilitada.");
