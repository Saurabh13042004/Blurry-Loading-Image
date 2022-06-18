const loadText  =  document.querySelector('.percentage');

const bg  =  document.querySelector('.img_bg');
let int = setInterval(blurring,20)
let load = 0;

// Credits of scale function :- Stackoverflow
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
function blurring(params) {
    load++;

    if (load>99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity =   scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

}