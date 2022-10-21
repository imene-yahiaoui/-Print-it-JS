
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
const image=document.getElementsByTagName('image')
const tagline= txtCont.getElementsByTagName('tagline')
const span= txtCont.getElementsByTagName('#banner span')
const p= txtCont.getElementsByTagName('#banner p' );
const dots=document.getElementsByClassName('dots');
const suivant=document.getElementsByClassName("arrow_right");
const precedent=document.getElementsByClassName('arrow_left');
const numSlid=slides.length;
let count=0;

function slideSuivant(count,){
	count=count;
	cImg.src="img/"+ image[count];

	//changer  la place de dots active

for (var x= 0; x<dots.length;x++){
	dots[x].classList.remove('active')
}
dots [count].classList.add('active');

//changer le text


    slides[count].classList.remove('active');
    if (count<numSlid-1){
	count++
    } else {
	count=0;
}
slides[count].classList.add('active')
console.log(count);


}
suivant.addEventListener ('click',slideSuivant);

function slidePrecedent(){
	slides[count].classList.remove('active');
	if (count>0){
		count--
	} else {
		count=numSlid -1;
	}
	slides [count].classList.add('active')
	console.log(count);
	
	
	}
	precedent.addEventListener('click',slidePrecedent);