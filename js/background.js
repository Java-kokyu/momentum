const images = [
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpeg",    
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const backgroundImg = document.createElement("img");

backgroundImg.src = chosenImage;

document.body.appendChild(backgroundImg);