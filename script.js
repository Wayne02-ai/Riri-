const quiz=[
{
q:"Who made this surprise?",
a:["Wayne ❤️","Batman","Iron Man"],
c:0
},
{
q:"What do I secretly want?",
a:["Pizza","To annoy you","A hug from you ❤️"],
c:2
},
{
q:"Complete: I ____ you.",
a:["ignore","miss","forgot"],
c:1
},
{
q:"Who is amazing?",
a:["You ❤️","Me","Both of us"],
c:2
},
{
q:"Ready to unlock the message?",
a:["YES ❤️","Maybe","No"],
c:0
}
];

let current=0;

function startGame(){
  document.getElementById("music").play();

giftPage.classList.add("hide");
quizPage.classList.remove("hide");
load();
}

function load(){

bar.style.width=(current/quiz.length*100)+"%";

question.innerHTML=quiz[current].q;

answers.innerHTML="";

quiz[current].a.forEach((text,index)=>{

let div=document.createElement("div");

div.className="answer";

div.innerHTML=text;

div.onclick=()=>choose(index);

answers.appendChild(div);

});

}

function choose(index){

if(index===quiz[current].c){

current++;

if(current==quiz.length){

quizPage.classList.add("hide");

finish.classList.remove("hide");

bar.style.width="100%";

return;

}

load();

}else{

alert("Oops 😜 Try again!");

}

}

function celebrate(){

for(let i=0;i<120;i++){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=4+Math.random()*5+"s";

document.body.appendChild(h);

}

alert("🥹 Thank you for finishing my little surprise. I really miss you ❤️");

}

setInterval(()=>{

let h=document.createElement("div");

h.className="heart";

h.innerHTML="💖";

h.style.left=Math.random()*100+"vw";

document.body.appendChild(h);

setTimeout(()=>h.remove(),8000);

},500);