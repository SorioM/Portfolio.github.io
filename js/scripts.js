const texts = ["Back-End Developer", "Front-End Developer", "SQL Developer", "SQL Report Writer"];
let count = 0;
let index = 0;
let currentText = '';
let isDeleting = false;
const speed = 150;
const pause = 1500;

function type() {
    const element = document.getElementById('my-title');
    if (count === texts.length) count = 0;

    currentText = texts[count];
    
  
    if (!isDeleting && index <= currentText.length) {
        element.innerHTML = currentText.slice(0, index);
        index++;
        setTimeout(type, speed);
    } 
   
    else if (isDeleting && index >= 0) {
        element.innerHTML = currentText.slice(0, index);
        index--;
        setTimeout(type, speed / 2);
    } 

    else {
        isDeleting = !isDeleting;

        if (!isDeleting) {
            count++;
            index = 0;
            setTimeout(type, speed);
        } else {
            setTimeout(type, pause);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('my-title').innerHTML = '';
    setTimeout(type, speed);
});
