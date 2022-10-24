
//console.log("hi you ")

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
 
let count=0;

 

var srcImage= "./assets/images/slideshow/";
const dots=document.getElementsByClassName('dot');
const suivant=document.querySelector('.right');
const precedent=document.querySelector('.left');
const numSlid=slides.length;
const banner = document.getElementById('banner');
//const img= document.getElementsByClassName('active');





function slideSuivant(){
	
dots[count].classList.remove('dot_selected');

if (count<numSlid-1){

	count++;

}else{
	count=0;

	
}

dots[count].classList.add('dot_selected');



//images
const image=slides[count].image;
var imgBaner= banner.getElementsByClassName("active")
console.log(imgBaner)

imgBaner[0].setAttribute("src",srcImage+image )
//console.log(image);

console.log(count);

//p
const tagline=slides[count].tagLine;

var paragraphe= banner.getElementsByClassName ("active_p")
console.log(paragraphe)
 paragraphe[0].innerHTML=(tagline)


}


suivant.addEventListener('click' ,slideSuivant );



function slidePrecedent(){
	dots[count].classList.remove('dot_selected');
	if (count>0){
		count--
	} else {
		count=numSlid -1;
	}
	dots [count].classList.add('dot_selected')


	//images
const image=slides[count].image;
var imgBaner= banner.getElementsByClassName("active")
console.log(imgBaner)

imgBaner[0].setAttribute("src",srcImage+image )


	console.log(count);
	
	//p
const tagline=slides[count].tagLine;

var paragraphe= banner.getElementsByClassName ("active_p")
console.log(paragraphe)
 paragraphe[0].innerHTML=(tagline)
	}
	precedent.addEventListener('click',slidePrecedent);



	