const nav=document.getElementById("topNavigaion");
var lock=document.getElementById("lockIcon");
const progressBar=document.getElementById("slider");
var tooltip=document.getElementById("tooltip");
var leftSlide=document.getElementById("leftSlide");
var rightSlide=document.getElementById("rightSlide");

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
document.getElementById("buttonIcon1").style.fontSize=scale*0.75+"em";
document.getElementById("buttonIcon2").style.fontSize=scale*0.75+"em";
leftSlide.style.fontSize=2.75*scale+"em";
rightSlide.style.fontSize=2.75*scale+"em";
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

var slide=0;
leftSlide.addEventListener("click",function(){
    if(slide!=0){
        slide--;
    }
});
rightSlide.addEventListener("click",function(){
    if(slide!=information[currentSlide].length-1){
        slide++;
    }
});

leftSlide.addEventListener("mouseover",function(){
    leftSlide.style.backgroundColor="aliceblue";
});
leftSlide.addEventListener("mouseleave",function(){
    if(light){
        leftSlide.style.backgroundColor="rgb(49, 135, 233)";
    } else{
        leftSlide.style.backgroundColor="gold";
    }
});

rightSlide.addEventListener("mouseover",function(){
    rightSlide.style.backgroundColor="aliceblue";
});
rightSlide.addEventListener("mouseleave",function(){
    if(light){
        rightSlide.style.backgroundColor="rgb(49, 135, 233)";
    } else{
        rightSlide.style.backgroundColor="gold";
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
    tooltip.style.color="white";
    tooltip.style.backgroundColor="black";
    tooltip.style.border=4*scale+"px"+" solid rgb(49, 135, 233)";
    for(let i=0;i<document.getElementsByClassName("explainImg").length;i++){
        document.getElementsByClassName("explainImg")[i].style.border=2*scale+"px"+" solid black";
    }
    leftSlide.style.backgroundColor="rgb(49, 135, 233)";
    rightSlide.style.backgroundColor="rgb(49, 135, 233)";
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
    tooltip.style.color="black";
    tooltip.style.backgroundColor="rgb(223, 219, 206)";
    tooltip.style.border=4*scale+"px"+" solid gold";
    for(let i=0;i<document.getElementsByClassName("explainImg").length;i++){
        document.getElementsByClassName("explainImg")[i].style.border=2*scale+"px"+" solid rgb(49, 135, 233)";
    }
    leftSlide.style.backgroundColor="gold";
    rightSlide.style.backgroundColor="gold";
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

var closeTooltip=true;
var closeTooltip2=true;
var closeTooltip3=true;
document.getElementsByClassName("explainImg")[0].addEventListener("mouseover",function(){
    closeTooltip=false;
    closeTooltip2=false;
    closeTooltip3=false;
    tooltip.style.display="block";
    tooltip.style.left="2.5vw";
    tooltip.style.top="185vh";
    tooltip.style.width="10vw";
    tooltip.innerHTML="These images depict how the United States is overtaking many parts of the world through imperialism";
});
document.getElementsByClassName("explainImg")[1].addEventListener("mouseover",function(){
    closeTooltip=false;
    closeTooltip2=false;
    closeTooltip3=false;
    tooltip.style.display="block";
    tooltip.style.left="85vw";
    tooltip.style.top="185vh";
    tooltip.style.width="10vw";
    tooltip.innerHTML="These images depict how the United States is overtaking many parts of the world through imperialism";
});
document.getElementsByClassName("explainImg")[0].addEventListener("mouseleave",function(){
    closeTooltip=true;
});
document.getElementsByClassName("explainImg")[1].addEventListener("mouseleave",function(){
    closeTooltip2=true;
});
document.getElementsByClassName("explainImg")[2].addEventListener("mouseleave",function(){
    closeTooltip3=true;
});
document.getElementsByClassName("explainImg")[2].addEventListener("mouseover",function(){
    closeTooltip=false;
    closeTooltip2=false;
    closeTooltip3=false;
    tooltip.style.display="block";
    tooltip.style.left="2.5vw";
    tooltip.style.top="283.5vh";
    tooltip.style.width="25vw";
    tooltip.innerHTML="This image depicts Uncle Sam lecturing four children labelled “Philippines,” “Hawaii,” “Puerto Rico,” and “Cuba” in front of children holding books labeled with various U.S. states. In the background, an American Indian holds a book upside down, a Chinese boy stands at the door, and a black boy cleans a window. The blackboard reads, “The consent of the governed is a good thing in theory, but very rare in fact… the U.S. must govern its new territories with or without their consent until they can govern themselves.” - Lumen Boundless US History";
});

var information=[
    ["aaa","aa"],
    ["s"],
    [""],
    [""],
    [""],
    [""],
    [""]
];
var allImage=[
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""]
];
var currentSlide=0;
var img=document.getElementById("img");
var info=document.getElementById("infoText");
var infoTitle=document.getElementById("infoTitle");
setInterval(function(){
    tooltip.style.padding=(10*scale)+"px "+(10*scale)+"px";
    tooltip.style.borderRadius=10*scale+"px";
    if(closeTooltip||closeTooltip2||closeTooltip3){
        tooltip.style.display="none";
    }
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
            answerText.innerHTML="Which of the following is a reason that the United States imperialized other nations?";
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
            currentSlide=0;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="s";
            info.innerHTML=information[0][slide];
            break;
        case 10:
            currentSlide=1;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="";
            info.innerHTML=information[1][slide];
            break;
        case 20:
            currentSlide=2;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="";
            info.innerHTML=information[2][slide];
            break;
        case 30:
            currentSlide=3;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="";
            info.innerHTML=information[3][slide];
            break;
        case 40:
            currentSlide=4;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="";
            info.innerHTML=information[4][slide];
            break;
        case 50:
            currentSlide=5;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="";
            info.innerHTML=information[5][slide];
            break;
        default:
            currentSlide=6;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="";
            info.innerHTML=information[6][slide];
            break;
    }
    let imgContainer=document.getElementsByClassName("imgContainer");
    let pic=document.getElementsByClassName("explainImg");
    for(p of pic){
        while(p.offsetWidth*scale>imgContainer[0].offsetWidth){
            p.style.width=p.offsetWidth*scale/1.1+"px";
        }
        while(p.offsetHeight*scale>imgContainer[0].offsetHeight){
            p.style.height=p.offsetHeight*scale/1.1+"px";
        }
    }
});