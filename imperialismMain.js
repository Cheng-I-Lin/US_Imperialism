const nav=document.getElementById("topNavigaion");
var lock=document.getElementById("lockIcon");
const progressBar=document.getElementById("slider");

var scaleX=(window.innerHeight/722)*100;
var scale=(window.outerHeight/824);
const text=document.getElementsByClassName("textContainer");
for(t of text){
    t.style.fontSize=scale+"em";
}
nav.style.fontSize=scale*1.5+"em";
const navLink=document.getElementsByClassName("navigationLinks");
for(l of navLink){
    l.style.padding=(16*scale)+"px "+(25*scale)+"px";
}
document.getElementById("navPosition").style.padding=(14*scale)+"px "+(35*scale)+"px";
document.getElementById("title1").style.paddingTop=scale*3.25+"%";
document.getElementById("title2").style.paddingTop=scale*3.25+"%";
document.getElementById("overlayText").style.fontSize=scale*2+"em";
document.getElementById("footer").style.fontSize=scaleX+"%";

document.getElementById("navPosition").addEventListener("click",function(){
    if(nav.style.position=="absolute"){
        //Changes the icon based on position
        lock.className="fa fa-unlock";
        nav.style.position="fixed";
    } else{
        lock.className="fa fa-lock";
        nav.style.position="absolute";
    }
});
var img=document.getElementById("img");
var info=document.getElementById("info");
setInterval(function(){
    document.getElementById("year").innerHTML=1900+parseInt(progressBar.value);
    //Don't show info and img when not the correct year, opacity transition fade
    switch(parseInt(progressBar.value)){
        case 0:
            img.src="";
            info.innerHTML="hi";
            break;
        case 10:
            img.src="";
            info.innerHTML="hi";
            break;
        case 20:
            img.src="";
            info.innerHTML="hi";
            break;
        case 30:
            img.src="";
            info.innerHTML="hi";
            break;
        case 40:
            img.src="";
            info.innerHTML="hi";
            break;
        case 50:
            img.src="";
            info.innerHTML="hi";
            break;
        default:
            img.src="";
            info.innerHTML="";
            break;
    }
    let imgContainer=document.getElementsByClassName("imgContainer");
    let pic=document.getElementsByClassName("explainImg");
    for(p of pic){
        while(p.offsetWidth>imgContainer[0].offsetWidth){
            p.style.width=p.offsetWidth/1.1+"px";
        }
        while(p.offsetHeight>imgContainer[0].offsetHeight){
            p.style.height=p.offsetHeight/1.1+"px";
        }
    }
});