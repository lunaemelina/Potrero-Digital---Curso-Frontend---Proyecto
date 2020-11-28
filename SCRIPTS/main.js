var header= document.querySelector('header');
console.log(header);
header.onmouseout= function(){
  header.style.opacity="0";
}

header.onmouseover= function(){
  header.style.opacity="1";
}
