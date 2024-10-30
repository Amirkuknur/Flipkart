let image=document.querySelector(".slider");
let translate=0;

setInterval(()=>{
    if(translate>= 0 && translate <400){
        translate+=100
    }else{
        translate = 0
    }
    image.style.transition ="2s";
    image.style.transform = `translateX(${-translate}%)`
},4400);

function left(){
    if(translate>0){
        translate-=100
        image.style.transition ="1s";
        image.style.transform = `translateX(${-translate}%)`
    }
}

function right(){
    if(translate<400){
        translate+=100
        image.style.transition ="1s";
        image.style.transform = `translateX(${-translate}%)`
    }
}

const sliderItems = document.querySelector('.slider-items');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


nextBtn.addEventListener('click', () => {
    sliderItems.scrollLeft += 220; // Scroll to the next item (adjust according to item width)
});

prevBtn.addEventListener('click', () => {
    sliderItems.scrollLeft -= 220; // Scroll to the previous item
});


const ELec = document.querySelector('.bestdeal');
const prevBtnn = document.querySelector('.prev-btnn'); 
const nextBtnn = document.querySelector('.next-btnn'); 


nextBtnn.addEventListener('click', () => {
    ELec.scrollLeft += 220; 
});

prevBtnn.addEventListener('click', () => {
    ELec.scrollLeft -= 220; 
});



const backButton = document.querySelector('.back');
const forwardButton = document.querySelector('.forward');
const banner = document.querySelector('.banner');
let currentScrollPosition = 0; // To track the current scroll position
const scrollAmount = 220; // Adjust this value based on how much you want to scroll each time

// Event listener for the forward button (scrolling right)
forwardButton.addEventListener('click', () => {
    banner.scrollLeft += scrollAmount; // Scroll the banner container to the right
});

// Event listener for the back button (scrolling left)
backButton.addEventListener('click', () => {
    banner.scrollLeft -= scrollAmount; // Scroll the banner container to the left
});


