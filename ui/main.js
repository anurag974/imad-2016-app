console.log('Loaded!');

//changing the text of main div

var element=document.getElementById('mainElement');
element.innerHTML='new-value';

//move the image

var img=document.getElementById('madi');
img.onclick=function(){
  img.style.marginLeft='100px';  
};