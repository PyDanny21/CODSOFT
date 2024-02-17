const Btn=document.querySelector('.mobile');
const Menu=document.querySelector('.menu');
Btn.addEventListener('click',()=>{
    const Toggled=Menu.classList.toggle('menu-toggle');
    const Text=Toggled ? Btn.innerHTML='&times;':Btn.innerHTML=
    '&equiv;';
});

