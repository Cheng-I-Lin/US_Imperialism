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
document.getElementById("tm").style.fontSize=2*scale+"em";
document.getElementById("infoPage").style.fontSize=1.25*scale+"em";
document.getElementById("infoPage").style.border=4*scale+"px solid rgb(49, 135, 233)";
document.getElementById("infoPage").style.borderRadius=15*scale+"px";
document.getElementById("infoPage").style.padding=(10*scale)+"px "+(10*scale)+"px";
document.getElementById("title1").style.paddingTop=scale*3.25+"%";
document.getElementById("title2").style.paddingTop=scale*3.25+"%";
document.getElementById("overlayText").style.fontSize=scale*2+"em";
document.getElementById("footer").style.fontSize=scaleX+"%";
//Initialize slider thumb color
document.getElementById("slider").style.setProperty('--sliderColor', "rgb(49, 135, 233)");
document.getElementById("slider").style.setProperty('--sliderBorder', "blue");

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

const infoPage=document.getElementById("infoPage");
function openInfo(){
    if(infoPage.style.display=="block"){
        infoPage.style.opacity=0;
        setTimeout(function(){
            infoPage.style.display="none";
        },1000);
    } else{
        infoPage.style.display="block";
        setTimeout(function(){
            infoPage.style.opacity=1;
        });
    }
}

var infoButton=document.getElementsByClassName("infoButton");
function lightTheme(){
    infoButton[0].style.backgroundColor="gold";
    infoButton[1].style.backgroundColor="white";
    //Change all colors
    document.getElementById("title1").style.color="black";
    document.getElementById("title1").style.backgroundColor="rgb(49, 135, 233)";
    document.getElementById("title2").style.color="black";
    document.getElementById("title2").style.backgroundColor="rgb(49, 135, 233)";
    document.getElementById("aboutImperialism").style.backgroundColor="rgb(223, 219, 206)";
    document.getElementById("aboutImperialism").style.color="black";
    document.getElementById("unitedStates").style.color="blue";
    document.getElementById("timeline").style.backgroundColor="rgb(223, 219, 206)";
    document.getElementById("timeline").style.color="black";
    document.getElementById("slider").style.backgroundColor="black";
    for(let i=0;i<document.getElementsByClassName("slide").length;i++){
        document.getElementsByClassName("slide")[i].style.backgroundColor="black";
    }
    document.getElementById("slider").style.setProperty('--sliderColor', "rgb(49, 135, 233)");
    document.getElementById("slider").style.setProperty('--sliderBorder', "blue");
}
function darkTheme(){
    infoButton[1].style.backgroundColor="gold";
    infoButton[0].style.backgroundColor="white";
    document.getElementById("title1").style.color="rgb(49, 135, 233)";
    document.getElementById("title1").style.backgroundColor="black";
    document.getElementById("title2").style.color="rgb(49, 135, 233)";
    document.getElementById("title2").style.backgroundColor="black";
    document.getElementById("aboutImperialism").style.backgroundColor="rgb(50, 50, 50)";
    document.getElementById("aboutImperialism").style.color="rgb(223, 219, 206)";
    document.getElementById("unitedStates").style.color="gold";
    document.getElementById("timeline").style.backgroundColor="rgb(50, 50, 50)";
    document.getElementById("timeline").style.color="rgb(223, 219, 206)";
    document.getElementById("slider").style.backgroundColor="rgb(223, 219, 206)";
    for(let i=0;i<document.getElementsByClassName("slide").length;i++){
        document.getElementsByClassName("slide")[i].style.backgroundColor="rgb(223, 219, 206)";
    }
    document.getElementById("slider").style.setProperty('--sliderColor', "yellow");
    document.getElementById("slider").style.setProperty('--sliderBorder', "orange");
}

function copyLink() {
    navigator.clipboard.writeText("https://cheng-i-lin.github.io/US_Imperialism");
    alert("Copied the link to this website:\nhttps://cheng-i-lin.github.io/US_Imperialism");
}

var img=document.getElementById("img");
var info=document.getElementById("info");
var infoTitle=document.getElementById("infoTitle");
setInterval(function(){
    document.getElementById("year").innerHTML=1900+parseInt(progressBar.value);
    //Don't show info and img when not the correct year, opacity transition fade
    switch(parseInt(progressBar.value)){
        case 0:
            img.src="";
            infoTitle.innerHTML="";
            info.innerHTML="";
            break;
        case 10:
            img.src="";
            infoTitle.innerHTML="";
            info.innerHTML="";
            break;
        case 20:
            img.src="";
            infoTitle.innerHTML="";
            info.innerHTML="";
            break;
        case 30:
            img.src="";
            infoTitle.innerHTML="";
            info.innerHTML="";
            break;
        case 40:
            img.src="";
            infoTitle.innerHTML="";
            info.innerHTML="";
            break;
        case 50:
            img.src="";
            infoTitle.innerHTML="";
            info.innerHTML="";
            break;
        default:
            img.src="";
            infoTitle.innerHTML="";
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