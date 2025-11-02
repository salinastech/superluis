document.addEventListener('DOMContentLoaded', () => {
    const alternarMenu = document.getElementById('alternar-menu');
    const menuPrincipal = document.getElementById('menu-principal');

    alternarMenu.addEventListener('click', () => {
        menuPrincipal.classList.toggle('activo');
        alternarMenu.classList.toggle('activo'); 
    });
    const desplegableLi = document.querySelector('li.desplegable');
    const alternarDesplegable = document.querySelector('.desplegable > a.alternar-desplegable');
    
    const subMenu = desplegableLi ? desplegableLi.querySelector('ul') : null; 

    if (alternarDesplegable && subMenu) {
        alternarDesplegable.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                if (subMenu.style.display === 'flex') {
                    subMenu.style.display = 'none';
                } else {
                    subMenu.style.display = 'flex'; 
                }
            }
        });
    }
});