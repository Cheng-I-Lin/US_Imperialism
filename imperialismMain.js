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
    t.style.fontSize=scaleX+"%";
}
nav.style.fontSize=scale*1.5+"em";
const navLink=document.getElementsByClassName("navigationLinks");
for(l of navLink){
    l.style.padding=(16*scale)+"px "+(25*scale)+"px";
}
var answerText=document.getElementById("answerText");
document.getElementById("navPosition").style.padding=(14*scale)+"px "+(35*scale)+"px";
document.getElementById("tm").style.fontSize=2*scale+"em";
document.getElementById("info").style.fontSize=scale+"em";
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
    document.getElementsByClassName("choice")[i].style.fontSize=scale+"em";
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
    if(progressBar.value!=0){
        progressBar.value--;
    }
});
rightSlide.addEventListener("click",function(){
    if(progressBar.value!=102){
        progressBar.value++;
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
    document.getElementById("img").style.border=2*scale+"px"+" solid black";
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
        document.getElementsByClassName("choice")[i].style.backgroundColor="black";
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
    document.getElementById("img").style.border=2*scale+"px"+" solid rgb(49, 135, 233)";
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
    progressBar.value=102;
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

var answer=[1,3,3,4,2];
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
    ["<br>"],
    ["<br>In 1850 the US and Great Britain were discussing the negotiation of the Clayton-Bulwer Treaty fighting for a proposed idea of a canal through Central America, the Republic of Nicaragua. This ended soon and did not make further progress than the planning stage. The French tried to do the same, to create a canal through Panama but after countless diseases such as Malaria and Yellow Fever, the French attempt went bankrupt after losing over 20,000 lives. After the US saw Panama fighting for their independence, the US took the chance to bribe them and create treaties to make the canal and help Panama win their independence."],
    ["<br>What is operation condor?<br>It is a secret operation that started around the 1970s due to dangerous people traveling in  and out of countries in South America mostly from Chile, Argentina, Bolivia, Brazil, Paraguay, Peru, and Uruguay. Operation Condor gives these country access and right to capture any of the escapees. Henry Kissinger was state secretary of the United States and helped with US involvement in the operation to help train people to torture and somtimes murder terrorism and subversion. But a lot of people were killed or disappeared were just innocent people. When Kissinger was asked in 2001 by judge Roger Le Loire in his stay in Paris, he soon fled back to the United States."],
    ["<br>Bay of Pigs was a secretly financed and directed operation by the U.S government on April 17th to 20th during the Cuban Revolution. Cuban ex-prime minister Castro was trying to overthrow other countries. Cuban soon had enough power and became allies with America and Dominican Republic. US 34th President, Eisenhower accused Castro of being a communist and planned an invasion. The invasion by the CIA tried to overthrow Castro by using Cubans from Florida as military and untraceable aircrafts so it didn’t seem like America invaded. Cuban intelligence however knew the invasion was happening and quickly shut down the invasion."],
    ["<br>Missionaries actually stepped foot onto Hawaii soil in around the 1820s but it was not until the 1890s that the United States wanted to overthrow the Queen of Hawaii. Without the President’s approval, the marines took action and stormed the island and raised the American Flag on their soil while forcing the Queen to renounce her stance. In 1893 Grover Cleveland became President and withdrew the annexation  even though a lot of people still wanted Hawaii to be annexed. But after President Cleveland left the office, Hawaii was annexed again in 1898 to hold bases against Spanish Philippines."],
    ["<br>In 1600s Japan banned foreigners from entering the country. 1852 Matthew Perry(Not the one from FRIENDS) was sent to Japan because President Millard Fillmore wanted to negotiate an arrangement with Japan. He arrived in 1853 and was ordered that he can use gun force if needed. At first the Japanese did not let him in but after being intimidated by gunshots they answered him but rejected. Later that year he returned back with 10 ships and the Japanese had no choice but to agree to trade."],
    ["<br>"],
    ["<br>After WWII Korea gained freedom from Japan helped by Russian Federation in the North and America helped in the South. 1950-53 America had a massacre."],
    ["<br>The U.S. saw that an area in Vietnam is known to be the richest area so they fought for it. The communist party in South Vietnam organised a guerilla, the NFL, which forced the CIA to go into “anti-terror” mode and kill off people before they resupply the NFL. The US was drawn deeper and deeper in the war and started opertion “rolling thunder” to bomb northern Vietnam."],
    ["<br>Often referred to as the Iran–Contra scandal, the Iran–Contra affair was a political scandle that occured in the United States. The U.S. president at that time, Ronald Reagan, tried to assist anti-communist insurgencies around the world since they were in the Cold War with Russia. Although Reagan tried funding the Contras, who was battling with the communist Sandinista, with money from cocaine trades, an amendment is passed to prohibit this. However, at the same time, Iran captured American hostages and used them for ransom. Wanting to still help the Contras, the U.S. took the opportunity of using the money from the terrorist negotiations to still support the Contras."],
    ["<br>The Iran-Iraq War, also known as the First Gulf War, lasted for 8 years beginning by an invasion of Iran by the neighbouring Iraq, which started due to Iraq's desire to become the dominant state in the Persian Gulf and the religious tensions between Iraq and Iran. Throughout the war, the United States suppported Iraq with economic aid and military provisions. Although they did not officailly stated the reason for such support in the war, many have speculated that the U.S. secretly encouraged Iraqi leader Saddam Hussein to invade Iran."]
];
var allImage=[
    [""],
    ["https://smithsonianassociates.org/ticketing/images/web-core-2020/panama-canal.jpg"],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jorge_Rafael_Videla_Oath.PNG/1200px-Jorge_Rafael_Videla_Oath.PNG"],
    ["https://media.npr.org/assets/img/2011/04/15/3379132_wide-852d3133317531134183bd305e2ff83331d70966-s1100-c50.jpg"],
    ["https://assets.ozy.com/ozy-prod/2017/05/gettyimages-90768321.jpg?crop=0px,134px,1600px,900px&resize=600x337"],
    ["https://timpanogos.files.wordpress.com/2014/07/image149.png"],
    ["https://previews.123rf.com/images/lkeskinen/lkeskinen1610/lkeskinen161000246/63375277-sin-sello-de-goma-de-informaci%C3%B3n-en-blanco-imprimir-impresionar-sobreimpresi%C3%B3n-.jpg"],
    ["https://images.squarespace-cdn.com/content/v1/5e0185311e0373308494e5b6/1578378226384-73P3T4TCHPQTPACOEXD8/koreaus.jpg?format=1500w"],
    ["https://www.leftvoice.org/wp-content/uploads/2020/09/https___www.history.com_.image_MTY0Nzc1ODE2NTk5NzA5NjU5_vietnam-war-gettyimages-615208290-promo.jpg"],
    ["https://nsarchive.gwu.edu/sites/default/files/thumbnails/image/01-reagan-with-tower-report-1151229_600.jpg"],
    ["https://i0.wp.com/militaryhistorynow.com/wp-content/uploads/2019/03/152_mm_howitzer_D-20_belong_to_Military_of_Iran.jpg?fit=700%2C549&ssl=1"]
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
    if(progressBar.value!=102){
        document.getElementById("year").innerHTML="Year: "+(1898+parseInt(progressBar.value));
        trivia.style.display="none";
        answerText.style.display="none";
        img.style.opacity="1";
    } else{
        document.getElementById("year").innerHTML="Trivia Game Question #"+(currentQuestion+1);
        trivia.style.display="block";
        answerText.style.display="block";
        img.style.opacity="0";
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
            answerText.innerHTML="What is the Panama Canal?";
            break;
        case 3:
            answerText.innerHTML="Who is Henry Kissinger?";
            break;
        case 4:
            answerText.innerHTML="Who had the best presentation of all time?";
            break;
        default:
            break;
    }
    //Don't show info and img when not the correct year, opacity transition fade
    switch(parseInt(progressBar.value)){
        case 5:
            currentSlide=1;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Panama (1903~1914)";
            info.innerHTML=information[1][slide];
            break;
        case 72:
            currentSlide=2;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Operation Condor: Henry Kissinger (Around the 1970s)";
            info.innerHTML=information[2][slide];
            break;
        case 63:
            currentSlide=3;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Bay of Pigs (1961)";
            info.innerHTML=information[3][slide];
            break;
        case 0:
            currentSlide=4;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Hawaii (About 1898)";
            info.innerHTML=information[4][slide];
            break;
        case 47:
            currentSlide=5;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Japan (About 1945)";
            info.innerHTML=information[5][slide];
            break;
        case 52:
            currentSlide=7;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Korea (1950)";
            info.innerHTML=information[7][slide];
            break;
        case 77:
            currentSlide=8;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Vietnam (1975)";
            info.innerHTML=information[8][slide];
            break;
        case 87:
            currentSlide=9;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Iran - Contra Affair (1985-1987)";
            info.innerHTML=information[9][slide];
            break;
        case 82:
            currentSlide=10;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="Iran-Iraq War (1980s)";
            info.innerHTML=information[10][slide];
            break;
        default:
            currentSlide=6;
            img.src=allImage[currentSlide][slide];
            infoTitle.innerHTML="No Info";
            info.innerHTML="Move to the following years indicated by the large black squares";
            break;
    }
    let imgContainer=document.getElementsByClassName("imgContainer");
    let pic=document.getElementsByClassName("explainImg");
    for(p of pic){
        while(p.offsetWidth>imgContainer[0].offsetWidth){
            p.style.width=(p.offsetWidth/1.1)*scale+"px";
        }
        while(p.offsetHeight>imgContainer[0].offsetHeight){
            p.style.height=(p.offsetHeight/1.1)*scale+"px";
        }
        //p.style.width=p.offsetHeight*scale+"px";
    }
    while(img.offsetWidth*scale>imgContainer[2].offsetWidth){
        img.style.width=img.offsetWidth*scale/1.1+"px";
    }
    while(img.offsetHeight*scale>imgContainer[2].offsetHeight){
        img.style.height=img.offsetHeight*scale/1.1+"px";
    }
    switch(currentQuestion){
        case 0:
            document.getElementById("choice1Text").innerHTML="Policies aimed at extending the political, economic and cultural influence of a nation over areas beyond its boundaries";
            document.getElementById("choice2Text").innerHTML="Colonization of multiple countries by a single country and enslaving the people that are colonized";
            document.getElementById("choice3Text").innerHTML="Gaining control of other territories through the means military strength, only practiced by the United States";
            document.getElementById("choice4Text").innerHTML="A new form of colonization that began around the 20th century involving only highly developed countries";
            break;
        case 1:
            document.getElementById("choice1Text").innerHTML="They felt like it";
            document.getElementById("choice2Text").innerHTML="Governmental dictation";
            document.getElementById("choice3Text").innerHTML="Cultural superiority";
            document.getElementById("choice4Text").innerHTML="Invasion of enemy territories";
            break;
        case 2:
            document.getElementById("choice1Text").innerHTML="A canal providing the quickest direct access to Panama from the United States";
            document.getElementById("choice2Text").innerHTML="A canal made in Panama for the traders and merchants of Panama to further expand their trade routes";
            document.getElementById("choice3Text").innerHTML="A canal that goes through Central America which Panama took control from the U.S";
            document.getElementById("choice4Text").innerHTML="The canal where the Ever Given cargo ship got stuck at recently";
            break;
        case 3:
            document.getElementById("choice1Text").innerHTML="Ask Mr.D, he probably knows the answer to this question";
            document.getElementById("choice2Text").innerHTML="The general and head of a famous terrorist group";
            document.getElementById("choice3Text").innerHTML="A dangerous criminal involving in the Operation Condor that killed thousands of people";
            document.getElementById("choice4Text").innerHTML="He was a state secretary of the United States and helped with U.S. involvement in the operation to help train people";
            break;
        default:
            document.getElementById("choice1Text").innerHTML="Rick and Josh's group";
            document.getElementById("choice2Text").innerHTML="Definitely Alan and Derrick's group";
            document.getElementById("choice3Text").innerHTML="Mr.D(Although he didn't present, I needed one more option)";
            document.getElementById("choice4Text").innerHTML="Michelle, Rochelle, and Yun Ji's group";
            break;
    }
    for(let i=0;i<document.getElementsByClassName("choice").length;i++){
        document.getElementsByClassName("choice")[i].style.paddingTop=15*scale+"px";
    }
    document.getElementsById("choice1Text").style.fontSize=scale+"em";
    document.getElementsById("choice2Text").style.fontSize=scale+"em";
    document.getElementsById("choice3Text").style.fontSize=scale+"em";
    document.getElementsById("choice4Text").style.fontSize=scale+"em";
    document.getElementById("infoPage").style.fontSize=1.25*scale+"em";
    document.getElementById("infoPage").style.border=4*scale+"px solid rgb(49, 135, 233)";
    document.getElementById("infoPage").style.borderRadius=15*scale+"px";
    document.getElementById("infoPage").style.padding=(10*scale)+"px "+(10*scale)+"px";
});