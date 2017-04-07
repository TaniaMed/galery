function selectPhoto(step) {
    switch(step) {
        case 0: 
            img.src = "i/breuer-building.jpg";
            break;
        case 1: 
            img.src = "i/guggenheim-museum.jpg";
            break;
        case 2: 
            img.src = "i/headquarters.jpg";
            break;
        case 3: 
            img.src = "i/IAC.jpg";
            break;
        case 4: 
            img.src = "i/new-museum.jpg";
            break;
    }    
}

const img = document.getElementById('currentPhoto'); 
let step = 1;
selectPhoto(step);
const element = document.getElementById('nextPhoto'); 
element.onclick = function() { 
    step += 1;
    step %= 5;
    selectPhoto(step)
}
const element2 = document.getElementById('prevPhoto'); 
element2.onclick = function() { 
    step -= 1;
    if (step < 0) {
        step = 4;
    }
    step %= 5;
    selectPhoto(step)
}