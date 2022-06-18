const sounds = ['one','two','three','four'];
//the list has id as elements
sounds.forEach((sound)=>{
 const btn =document.createElement('button');
 btn.classList.add('btn');

 btn.innerText=sound;
 document.body.appendChild(btn);
 const diy = document.getElementById(sound);

 function player(){
     diy.play();
 }
 btn.addEventListener('click',player);

 
})
