
//CONVERTING AGE INTO NO OF DAYS

// var age=prompt("what is your age ");
// var days=365 * age;
// alert("you are " + days + " years old")
// console.log("you are " + days + " years old");

//GUESSING A NO

// var no=7; 
// while(guess!=7){
// var guess = prompt("guess a no");
// if(guess==7)
//     alert("you got it right");
// else
//     alert("try again");    
// }

//ANNOY-OMATIC

// var ans = prompt("are we there yet");
// while(ans != "no" && ans != "yeah")
// {
//     var ans = prompt("are we there yet");
        
// }
// alert("yay, we finally made it");

//DOM MANUPLATION

// var lis= document.querySelector("ul");

// for(i=0;i<lis.length;i++)
// {
//     lis[i].addEventListener("click",function(){
//         this.style.background= "pink";
//         this.style.color= "blue";

//     })

// }

//LET THE GAME BEGINS

var button1=document.querySelector("#p1");
var button2=document.querySelector("#p2");
var p1_display=document.querySelector("#p-1");
var p2_display=document.querySelector("#p-2");
var ok_button=document.querySelector("#confirm");
var reset_but=document.querySelector("#reset");
var numinput=document.querySelector("input");
var winingscore=document.querySelector("p span");
var p1_score=0;
var p2_score=0;
var gameover=false;

ok_button.addEventListener("click",function(){
    winingscore.textContent=numinput.value;

})


button1.addEventListener("click",function(){
    if(!gameover){
        p1_score += 1;
        if(p1_score==numinput.value){
            p1_display.classList.add("winner");
            gameover=true;
        }
        p1_display.textContent = p1_score;
    }
});
button2.addEventListener("click",function(){
    if (!gameover) {
        p2_score += 1;
        if (p2_score == numinput.value) {
            p2_display.classList.add("winner");
            gameover = true;
        }
        p2_display.textContent = p2_score;
    }
});
reset_but.addEventListener("click",function(){                                                winingscore.textContent=0;
p1_display.textContent=0;
p2_display.textContent=0;
p1_score=0;
p2_score=0;
gameover=false;
p1_display.classList.remove("winner");
p2_display.classList.remove("winner");

})
