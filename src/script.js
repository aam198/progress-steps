const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;

// adding an event listener to next button, when clicked function is called that increases currentActive 
next.addEventListener('click', () => {
    currentActive++;

   if(currentActive >= circles.length){
       currentActive = circles.length
       next.setAttribute('disabled', true);
   }
   update();
   console.log(currentActive)
});

prev.addEventListener('click', () => {
    currentActive--;

   if(currentActive < 1){
       currentActive = 1;  
   }

   update();
   console.log(currentActive)

});


function update() {
    circles.forEach((circle, idx) =>{
        if (idx < currentActive){
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })

    //Since we're adding the class active above we can call it from the DOM below
    const actives = document.querySelectorAll('.active')
    
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}