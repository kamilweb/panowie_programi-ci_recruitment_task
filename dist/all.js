"use strict";window.onload=function(){TweenLite.to(".section__price",.8,{delay:.3,opacity:1,transform:"translateY(0)",ease:Power2.easeOut}),TweenLite.to(".section__form",.8,{delay:.6,opacity:1,transform:"translateY(0)",ease:Power2.easeOut});var e=document.getElementById("desc"),a=document.getElementById("form");e.addEventListener("click",function(){var n=10,a=setInterval(function(){var e=document.querySelector("header").offsetHeight,t=document.getElementsByClassName("section__circles")[0].offsetHeight;window.scrollTo(0,n),e+t+50<=(n+=10)&&clearInterval(a)},10)});var o=document.getElementById("ticketsNumber"),t=document.getElementById("ticketsPrice");function n(){var e=document.getElementById("name"),t=new RegExp("^[a-zA-Z_ ]*$"),n=new RegExp("^[0-9]+$");t.test(e.value)&&n.test(o.value)&&0!==e.value.length&&"0"!==o.value?a.classList.add("success"):(a.classList.add("error"),t.test(e.value)&&0!==e.value.length||(e.style.borderColor="red"),n.test(o.value)&&"0"!==o.value||(o.style.borderColor="red"))}a.addEventListener("submit",n),a.addEventListener("keydown",function(e){"Enter"===e.key&&n()}),o.addEventListener("change",function(){var e=Number(o.value);t.innerText=20*e});var r=document.querySelector("body"),i=void 0,s={x:0,y:0},d=window.innerWidth/2,c=window.innerHeight/2;function l(){var e=s.x-d,t=(s.y-c)/c,n=-e/d,a=20*Math.sqrt(Math.pow(t,2)+Math.pow(n,2));TweenLite.to("#animatedCircle",.5,{transform:"rotate3d("+t+", "+n+", 0, "+a+"deg)",ease:Power2.easeOut}),window.onresize=function(){d=window.innerWidth/2,c=window.innerHeight/2}}r.addEventListener("mousemove",function(e){s.x=e.pageX,s.y=e.pageY,cancelAnimationFrame(i),i=requestAnimationFrame(l)})};