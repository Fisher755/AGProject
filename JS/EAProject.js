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

//Это добавляет плавную прокрутку к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//"Умный" хедер, который меняется при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255,255,255,0.98)';
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255,255,255,0.96)';
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    }
});
// Индикатор прокрутки
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.querySelector('.scroll-progress').style.width = progress + '%';
});

// Кнопка "Наверх"
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});