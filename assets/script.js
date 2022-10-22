
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
//console.log(slides[0].image)
let count=0;

 const image=[slides[count].image];
const tagline=[slides[count].tagLine];
var cImg= "./assets/images/slideshow/";
const dots=document.getElementsByClassName('dot');
const suivant=document.querySelector('.right');
const precedent=document.querySelector('.left');
const numSlid=slides.length;
const banner = document.getElementById('banner');
const img= document.getElementsByClassName('active');


console.log(dots);
function slideSuivant(){
dots[count].classList.remove('dot_selected');
if (count<numSlid-1){
	count++;

}else{
	count=0;

	
}

dots[count].classList.add('dot_selected');
console.log(count);
}

suivant.addEventListener('click' ,slideSuivant);



function slidePrecedent(){
	dots[count].classList.remove('dot_selected');
	if (count>0){
		count--
	} else {
		count=numSlid -1;
	}
	dots [count].classList.add('dot_selected')
	console.log(count);
	
	
	}
	precedent.addEventListener('click',slidePrecedent);


/*
slides.forEach(post =>{
	img[0].innerHTML=
	`
	<img src=${cImg+image}></img>`
	count++
	img[1].innerHTML=` ${tagline}`
	



		})
	
	/*
 image.classList.remove('active');
if (count<numSlid-1){
count++
} else {
count=0;
}
image.classList.add('active')
console.log(count);

*/

 



/*
var img= (slides[count].image)
console.log(img)
slides.forEach(post =>{

content.innerHTML=
`

img.innerHtml= <img src="${cImg}"+"${[slides[count].image]}">;


<p.innerHTML= <p"${[slides[count].tagLine]}"></p>


`
*/
	

	/*

	//changer  la place de dots active


for (var x= 0; x<dots.length;x++){
	dots[x].classList.remove('active')
}
dots [count].classList.add('active');

//changer le text
tagline.txtCont=tagline.place

//changer le span 

span.txtCont=span[count]
*/


/*

slides.classList.remove('active');
    if (count<numSlid-1){
	count++
    } else {
	count=0;
}
 slides.classList.add('active')
console.log(count);


}
suivant.addEventListener('click' ,slideSuivant);



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
//	precedent.addEventListener('click',slidePrecedent);*/