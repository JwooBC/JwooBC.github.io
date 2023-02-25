var images = [
  "https://preview.redd.it/ouqkk54z3he51.png?width=800&format=png&auto=webp&v=enabled&s=5332e9329359a1b81bb6142199e1009f3606e766",
  "https://preview.redd.it/6ze5ub4z3he51.png?width=680&format=png&auto=webp&v=enabled&s=ad2887c47e88578cc5f61a17b852f96bac3df420",
  "https://preview.redd.it/kzmne54z3he51.jpg?width=920&format=pjpg&auto=webp&v=enabled&s=349448c3295d700ecff65c8030d813a817e2acc7",
  "https://preview.redd.it/x69a094z3he51.png?width=800&format=png&auto=webp&v=enabled&s=e2051e738b989d5d6cea5dfc403c8a3b0f376b14",
  "https://preview.redd.it/2b20l34z3he51.jpg?width=680&format=pjpg&auto=webp&v=enabled&s=d6361e8e0f10a876d3d96530d5d41f33408c4477"
];


var imageCaptions =["Jett", "Sage", "Cypher", "Raze", "Phoenix"];
var index = 0; 

 function updateImage(){
 document.getElementById("slideshow").src = images[index];
 document.getElementById("slideshow").alt = imageCaptions[index];
 document.getElementById("caption").textContent = imageCaptions[index]; 
} 

function next(){
 if (images.length == index + 1)
   index = 0;
 else
   index++;
   updateImage();
} 
 

function back(){
 if (index === 0)
   index = images.length - 1;
 else
   index--;
   updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click", back);
nextButton.addEventListener("click", next); 

setInterval(next, 3000);
