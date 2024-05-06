// Lorsque l'on appuie sur le "plus"

const button = document.querySelectorAll("button");
const contenu = document.querySelectorAll('.accordeon-contenu');
const plus = document.querySelectorAll('.button-plus');
const moins = document.querySelectorAll('.button-moins');
const cadre = document.querySelectorAll('.accordeon-article');

cadre.forEach ((article) => {
    article.addEventListener('click',()=>{
        article.classList.toggle("active");
    })  
});