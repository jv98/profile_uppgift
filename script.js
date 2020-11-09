// det här david min lärare på kursen javascript code från rad 2 till 35
window.onload = main;
// window.addEventListener('load', main);

/** Start of the program */
function main() {
    startSlideshowAnimation();
}

/** Start the animation with a set interval */
function startSlideshowAnimation() {
    setInterval(changeActiveImage, 2000);
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
    if (x > 8  &&  x < 12 ) {
        y.innerHTML = "God Morgon";
    }
    else if (x >= 12  &&  x < 18 ) {
        y.innerHTML = "God Eftermidag";
    }
    else if (x >=18   &&  x < 22 ) {
        y.innerHTML = "God Kväll";
    }
    else if (x >=22  || x <= 8 ) {
        y.innerHTML = "God Natt ";
    }
  }
