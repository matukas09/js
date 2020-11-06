console.log("01101000 01100101 01101100 01101100 01101111 00100000 01100110 01110010 01101111 01101101 00100000 01110011 01100011 01110010 01101001 01110000 01110100 00100000 01100110 01101001 01101100 01100101");
const images = ["img/pic1.JPG", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpeg", "img/pic5.jpg", "img/pic6.jpg", "img/pic7.jpg", "img/pic8.jpg", "img/pic9.jpg", "img/pic10.jpg", "img/pic11.jpg", "img/pic12.jpg", "img/pic13.jpg", "img/pic14.jpg"];
const imageToChange = document.getElementById("image")
const documentBody = document.getElementsByTagName('body')[0];
const switchButton = document.getElementById('switch');
function changeImage(){
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * images.length-1) + 1);
    console.log(rnd);
    imageToChange.src = images[rnd];

}

function switchMode() {
    console.log(switchButton.innerHTML);
    if(switchButton.innerHTML === "Night") {
    documentBody.style.background = "Black";
    switchButton.innerHTML = 'Day';
    } else {
    documentBody.style.background = "White";
    switchButton.innerHTML = 'Night';
    }


}