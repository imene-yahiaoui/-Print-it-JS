const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];





//les variables 
let count = 0;
var srcImage = "./assets/images/slideshow/";
const dots = document.getElementsByClassName("dot");
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
const numSlid = slides.length;
const banner = document.getElementById("banner");


function ImageParagraphe(count){
const image = slides[count].image;
var imgBaner = banner.getElementsByClassName("active");
console.log(imgBaner);
imgBaner[0].setAttribute("src", srcImage + image);
//console.log(image);
console.log(imgBaner);
//p
const tagline = slides[count].tagLine;
var paragraphe = banner.getElementsByClassName("active_p");
console.log(paragraphe);
paragraphe[0].innerHTML = tagline;
}



//function adroit
function slideSuivant() {
  dots[count].classList.remove("dot_selected");
  if (count < numSlid - 1) {
    count++;
  } else {
    count = 0;
  }
  dots[count].classList.add("dot_selected");
  //images
 ImageParagraphe(count); 
  
}
suivant.addEventListener("click", slideSuivant);




//function aguche
function slidePrecedent() {
  dots[count].classList.remove("dot_selected");
  if (count > 0) {
    count--;
  } else {
    count = numSlid - 1;
  }
  dots[count].classList.add("dot_selected");

  ImageParagraphe(count); 
  
}
precedent.addEventListener("click", slidePrecedent);





//code clavier

function keyclavier(i) {
  if (i.keyCode == 37) {
    slidePrecedent();
  } else if (i.keyCode == 39) {
    slideSuivant();
  }
}
document.addEventListener("keydown", keyclavier);

 




 
 //click dots
 
  dots[0].addEventListener("click" , function(){ 
    count=0;
    dots[1].classList.remove("dot_selected");
    dots[2].classList.remove("dot_selected");
    dots[3].classList.remove("dot_selected");
 
 console.log(count)
   //images
   const image = slides[0].image;
   var imgBaner = banner.getElementsByClassName("active");
     imgBaner[0].setAttribute("src", srcImage + image);
    //p
   const tagline = slides[0].tagLine;
    var paragraphe = banner.getElementsByClassName("active_p");
    paragraphe[0].innerHTML = tagline;
    dots[0].classList.add("dot_selected");
   }
  )
  
  dots[1].addEventListener("click", function(){ 
    dots[2].classList.remove("dot_selected");
    dots[3].classList.remove("dot_selected");
    dots[0].classList.remove("dot_selected");
   count=1;
    //images
    const image = slides[1].image;
    var imgBaner = banner.getElementsByClassName("active");
      imgBaner[0].setAttribute("src", srcImage + image);
     //p
    const tagline = slides[1].tagLine;
     var paragraphe = banner.getElementsByClassName("active_p");
     paragraphe[0].innerHTML = tagline;
     dots[1].classList.add("dot_selected");
   }
   )

   dots[2].addEventListener("click", function(){ 
    dots[1].classList.remove("dot_selected");
    dots[3].classList.remove("dot_selected");
    dots[0].classList.remove("dot_selected");
    count=2;
    //images
    const image = slides[2].image;
    var imgBaner = banner.getElementsByClassName("active");
      imgBaner[0].setAttribute("src", srcImage + image);
     //p
    const tagline = slides[2].tagLine;
     var paragraphe = banner.getElementsByClassName("active_p");
     paragraphe[0].innerHTML = tagline;
     dots[2].classList.add("dot_selected");
   }
   )

   dots[3].addEventListener("click", function(){ 
    dots[1].classList.remove("dot_selected");
    dots[2].classList.remove("dot_selected");
    dots[0].classList.remove("dot_selected");
    count=3;
    //images
    const image = slides[3].image;
    var imgBaner = banner.getElementsByClassName("active");
      imgBaner[0].setAttribute("src", srcImage + image);
     //p
    const tagline = slides[3].tagLine;
     var paragraphe = banner.getElementsByClassName("active_p");
     paragraphe[0].innerHTML = tagline;
     dots[3].classList.add("dot_selected");
   }
   )   