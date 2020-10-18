const zegar = document.querySelector('#zegar');
let czas = 60;
zegar.innerHTML = czas;

let zmiana = () => {
    czas = czas - 1;
    zegar.innerHTML = czas;
    if (czas == 0) {
        alert('Koniec ')
        window.location.reload()
    }
}
setInterval(function () {
    zmiana()
}, 1000);

let score = 0;
const newImg = new Image(150, 150);
newImg.src = 'kret.png'
const wynik = document.querySelector('#wynik')
wynik.innerHTML = score;

const  xMax= window.innerWidth-50;
const  yMax= window.innerHeight-50;
console.log(xMax,yMax)

const creat = () => {
   
    let x_pos = Math.floor(Math.random() * (xMax - 50)) + 50;
    let y_pos = Math.floor(Math.random() * (yMax - 50)) + 50;

    //newImg.className='container';
    newImg.setAttribute('onclick', 'caught()')
    document.body.appendChild(newImg);
    newImg.style.position = "absolute";
    newImg.style.left = x_pos + 'px';
    newImg.style.top = y_pos + 'px';
}

setInterval(function () {
    creat()
}, 1000);

function caught() {
    score = score + 1;
    wynik.innerHTML = score;

}


















//setTimeout("window.location.reload()", 500);


/*var rect = newDiv.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

let y=window.scrollY + document.querySelector('.container').getBoundingClientRect().top // Y

let x=window.scrollX + document.querySelector('.container').getBoundingClientRect().left // X
console.log(x,y);
x50-1250  y500 */