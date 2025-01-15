document.getElementById('collapse-btn').addEventListener('click', () => {
    const menu = document.querySelector('.left-menu');
    const items = document.getElementById('menu-items');
    if (menu.style.width === '50px') {
        menu.style.width = '20%';
        items.style.display = 'block';
    } else {
        menu.style.width = '50px';
        items.style.display = 'none';
    }
});
