console.log('Loaded!');

//changing the text of main div

var element=document.getElementById('mainElement');
element.innerHTML='new-value';

//move the image

var img=document.getElementById('madi');

var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
  var interval=setInterval(moveRight,100);  
};