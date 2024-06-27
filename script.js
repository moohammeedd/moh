let nav = document.getElementById('nav');
let aul = document.getElementById('aul');
let aul2 = document.getElementById('aul2');
let aul3 = document.getElementById('aul3');
let aul4 = document.getElementById('aul4');
let bar = document.getElementById('btnmenu');
let logo = document.getElementById('logo');
window.onscroll = function(){
    if(this.scrollY >= 30){
        nav.style.transitionProperty = 'background , color,border,width';
        nav.style.transitionDuration = '0.5s';
        nav.style.transitionTimingFunction = 'ease-in-out'
        nav.style.background = 'white';
        aul.classList.add('aul')
        aul2.classList.add('aul')
        aul3.classList.add('aul')
        aul4.classList.add('aul')
        bar.style.color = 'black';
        nav.style.borderBottom = '1px solid gray'
        logo.style.width = '60px'
    }
    else{
        nav.classList.remove('scroll-nav')
        nav.style.transitionProperty = 'background';
        nav.style.transitionDuration = '0.5s';
        nav.style.transitionTimingFunction = 'ease-in-out'
        nav.style.background = 'transparent';
        aul.classList.remove('aul')
        aul2.classList.remove('aul')
        aul3.classList.remove('aul')
        aul4.classList.remove('aul')
        bar.style.color = 'white';
        nav.style.borderBottom = '1px solid transparent'
        logo.style.width = '80px'
    }
}

let ul = document.getElementById('ul');
bar.onclick = function(){
    ul.classList.toggle('block')
}