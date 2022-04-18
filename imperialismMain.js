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
var answerText=document.getElementById("answerText");
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
answerText.style.fontSize=3*scale+"em";
for(let i=0;i<document.getElementsByClassName("choice").length;i++){
    document.getElementsByClassName("choice")[i].style.border=4*scale+"px"+" solid black";
}
//Initialize slider thumb color
document.getElementById("slider").style.setProperty('--sliderColor', "rgb(49, 135, 233)");
document.getElementById("slider").style.setProperty('--sliderBorder', "blue");

var hover=[true,true,true,true];
var light=true;
document.getElementsByClassName("choice")[0].addEventListener("mouseover",function(){
    if(hover[0]){
        document.getElementsByClassName("choice")[0].style.backgroundColor="aliceblue";
    }
});
document.getElementsByClassName("choice")[1].addEventListener("mouseover",function(){
    if(hover[1]){
        document.getElementsByClassName("choice")[1].style.backgroundColor="aliceblue";
    }
});
document.getElementsByClassName("choice")[2].addEventListener("mouseover",function(){
    if(hover[2]){
        document.getElementsByClassName("choice")[2].style.backgroundColor="aliceblue";
    }
});
document.getElementsByClassName("choice")[3].addEventListener("mouseover",function(){
    if(hover[3]){
        document.getElementsByClassName("choice")[3].style.backgroundColor="aliceblue";
    }
});

document.getElementsByClassName("choice")[0].addEventListener("mouseleave",function(){
    if(hover[0]){
        if(light){
            document.getElementsByClassName("choice")[0].style.backgroundColor="rgb(49, 135, 233)";
        } else{
            document.getElementsByClassName("choice")[0].style.backgroundColor="black";
        }
    }
});
document.getElementsByClassName("choice")[1].addEventListener("mouseleave",function(){
    if(hover[1]){
        if(light){
            document.getElementsByClassName("choice")[1].style.backgroundColor="rgb(49, 135, 233)";
        } else{
            document.getElementsByClassName("choice")[1].style.backgroundColor="black";
        }
    }
});
document.getElementsByClassName("choice")[2].addEventListener("mouseleave",function(){
    if(hover[2]){
        if(light){
            document.getElementsByClassName("choice")[2].style.backgroundColor="rgb(49, 135, 233)";
        } else{
            document.getElementsByClassName("choice")[2].style.backgroundColor="black";
        }
    }
});
document.getElementsByClassName("choice")[3].addEventListener("mouseleave",function(){
    if(hover[3]){
        if(light){
            document.getElementsByClassName("choice")[3].style.backgroundColor="rgb(49, 135, 233)";
        } else{
            document.getElementsByClassName("choice")[3].style.backgroundColor="black";
        }
    }
});

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
    light=true;
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
    for(let i=0;i<document.getElementsByClassName("choice").length;i++){
        document.getElementsByClassName("choice")[i].style.backgroundColor="rgb(49, 135, 233)";
        document.getElementsByClassName("choice")[i].style.border=4*scale+"px"+" solid black";
    }
    trivia.style.color="black";
    answerText.style.color="black";
}
function darkTheme(){
    light=false;
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
    document.getElementById("slider").style.backgroundColor="rgb(175, 175, 175)";
    for(let i=0;i<document.getElementsByClassName("slide").length;i++){
        document.getElementsByClassName("slide")[i].style.backgroundColor="rgb(175, 175, 175)";
    }
    document.getElementById("slider").style.setProperty('--sliderColor', "yellow");
    document.getElementById("slider").style.setProperty('--sliderBorder', "orange");
    for(let i=0;i<document.getElementsByClassName("choice").length;i++){
        document.getElementsByClassName("choice")[i].style.backgroundColor="black"
        document.getElementsByClassName("choice")[i].style.border=4*scale+"px"+" solid gold";
    }
    trivia.style.color="gold";
    answerText.style.color="rgb(223, 219, 206)";
}

function copyLink() {
    navigator.clipboard.writeText("https://cheng-i-lin.github.io/US_Imperialism");
    alert("Copied the link to this website:\nhttps://cheng-i-lin.github.io/US_Imperialism");
}

var trivia=document.getElementById("trivia");
trivia.style.fontSize=2*scale+"em";
function loadGame(){
    progressBar.value=100;
}

document.addEventListener("keyup",function(key){
    if(trivia.style.display=="block"){
        switch(key.code){
            case "Digit1":
                checkAns("choice1");
                break;
            case "Digit2":
                checkAns("choice2");
                break;
            case "Digit3":
                checkAns("choice3");
                break;
            case "Digit4":
                checkAns("choice4");
                break;
            default:
                break;
        }
    }
});

var answer=[1,2,3,4,1];
var currentQuestion=0;
function checkAns(id){
    //Gets answer correctly
    if(parseInt(id.substring(id.length-1))==answer[currentQuestion]){
        document.getElementById(id).style.backgroundColor="green";
        hover[parseInt(id.substring(id.length-1))-1]=false;
        setTimeout(function(){
            if(currentQuestion!=4){
                currentQuestion++;
                for(let i=0;i<document.getElementsByClassName("choice").length;i++){
                    if(light){
                        document.getElementsByClassName("choice")[i].style.backgroundColor="rgb(49, 135, 233)";
                        document.getElementsByClassName("choice")[i].style.border=4*scale+"px"+" solid black";
                        trivia.style.color="black";
                    } else{
                        document.getElementsByClassName("choice")[i].style.backgroundColor="black"
                        document.getElementsByClassName("choice")[i].style.border=4*scale+"px"+" solid gold";
                        trivia.style.color="gold";
                    }
                    hover[i]=true;
                }
            }
        },3000);
    } else{
        document.getElementById(id).style.backgroundColor="red";
        hover[parseInt(id.substring(id.length-1))-1]=false;
    }
}

var img=document.getElementById("img");
var info=document.getElementById("info");
var infoTitle=document.getElementById("infoTitle");
setInterval(function(){
    if(progressBar.value!=100){
        document.getElementById("year").innerHTML="Year: "+(1900+parseInt(progressBar.value));
        trivia.style.display="none";
        answerText.style.display="none";
    } else{
        document.getElementById("year").innerHTML="Trivia Game Question #"+(currentQuestion+1);
        trivia.style.display="block";
        answerText.style.display="block";
    }
    //Place answer text in the middle
    answerText.style.top=document.getElementById("answerBlock").offsetTop+(document.getElementById("answerBlock").offsetHeight-answerText.offsetHeight)/2+"px";
    switch(currentQuestion){
        case 0:
            answerText.innerHTML="What is imperialism?";
            break;
        case 1:
            answerText.innerHTML="";
            break;
        case 2:
            answerText.innerHTML="";
            break;
        case 3:
            answerText.innerHTML="";
            break;
        case 4:
            answerText.innerHTML="";
            break;
        default:
            break;
    }
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