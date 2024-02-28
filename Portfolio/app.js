document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substr(1);
        const targetElement = document.getElementById(targetId);

        // Smooth scroll animation
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

const mobile=document.querySelector('.mobile');
const Menu=document.querySelector('.menu');
mobile.addEventListener('click',()=>{
    const Toggled=Menu.classList.toggle('menu-width');
    const changedText=Toggled?mobile.innerHTML='&times;':mobile.innerHTML='&equiv;';

});