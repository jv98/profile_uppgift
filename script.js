// det här david min lärare på kursen javascript code från rad 2 till 30
window.onload = main;
// window.addEventListener('load', main);

/** Start of the program */
function main() {
    startSlideshowAnimation();
    addEventListeners();
}
/** event som man kan tryck på pillen så att den rotere */
function addEventListeners() {
    document.getElementById('rotate1').addEventListener('click', rotate );
    document.getElementById('rotate2').addEventListener('click', rotate );
}
/** Start the animation with a set interval */
function startSlideshowAnimation() {
    setInterval(changeActiveImage, 2000);
}
/**
 * 
 * @param {class för rotera pilar på hämsidan} e 
 */
function rotate (e) {
    e.target.classList.toggle('rotate');
} 

/** Presents the next image by checking which image is currently presented */
function changeActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');

    for (let i = 0; i < images.length; i++) {
        
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');

            let nextIndex = (i + 1) % images.length;
            images[nextIndex].classList.add('show');
            break;
        }
        
    }
}

myFunction();   
function myFunction() {
let x = new Date().getHours()
let y = document.getElementById("Timeday");
    if (x > 7  &&  x < 12 ) {
        y.innerHTML = "God Morgon";
    }
    else if (x >= 12  &&  x < 18 ) {
        y.innerHTML = "God Eftermidag";
    }
    else if (x >=18   &&  x < 22 ) {
        y.innerHTML = "God Kväll";
    }
    else if (x >=22  || x <= 7 ) {
        y.innerHTML = "God Natt ";
    }
  }
  addEventListeners();
