const images = [
    "img/0.png",
    "img/1.jpg",
    "img/2.png",
    "img/3.jpg",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const backgroundImg = document.createElement("img");

backgroundImg.src = chosenImage;

const backImg = document.body.appendChild(backgroundImg);

backImg.classList.add("background");
