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
  