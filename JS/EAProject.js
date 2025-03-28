document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuContent = document.querySelector('.menu-content');
    const menuLinks = document.querySelectorAll('.menu-content a');

    menuButton.addEventListener('click', function() {
        menuContent.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
            menuContent.classList.remove('active');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuContent.classList.remove('active');
            menuLinks.forEach(l => l.classList.remove('active')); // Убираем active у всех
            this.classList.add('active'); // Добавляем active текущему
        });
    });

    // Подсветка активного пункта при загрузке страницы
    const currentPath = window.location.hash || '#home';
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});