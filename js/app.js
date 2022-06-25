const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

const pageTransition = () => {
// Button Click active class
Array.from(secBtn).map((s, i)=>{
    secBtn[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        this.className += ' active-btn';
    })
})

//Sections Active Class

allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
        // first remove selected from the other bars
        secBtns.forEach((btn) => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active');

        // hide other sections
        sections.forEach((sec) => {
            sec.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})

//Toogle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', ()=> {
    let element = document.body;
    element.classList.toggle('light-mode');
})

}

pageTransition();