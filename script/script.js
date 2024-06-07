
document.addEventListener("DOMContentLoaded", function() {
    const liensScrollDoux = document.querySelectorAll('.link a');

    liensScrollDoux.forEach(lien => {
        lien.addEventListener('click', function(e) {
            e.preventDefault();
            const cible = this.getAttribute('href');
            document.querySelector(cible).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight - windowHeight;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition > sectionTop - windowHeight / 2) {
            section.style.transition = 'opacity 1s, transform 1s';
            section.style.opacity = 1;
            section.style.transform = 'scale(1)';
        } else {
            section.style.transition = 'opacity 1s, transform 1s';
            section.style.opacity = 0;
            section.style.transform = 'scale(0.8)';
        }
    });
    if (scrollPosition >= totalHeight) {
        window.removeEventListener('scroll', arguments.callee);
    }
});




const fermer = document.querySelector(".close");
const ouvrir = document.querySelector(".bars");
const navigation = document.querySelector(".link");
ouvrir.addEventListener('click',function(){
    navigation.classList.toggle("showLink");
    fermer.classList.toggle("showClose");
})
fermer.addEventListener('click',function(){
    navigation.classList.remove("showLink");
    fermer.classList.remove("showClose");
    
});