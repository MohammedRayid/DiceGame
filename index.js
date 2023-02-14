let randomNumber1=Math.floor(Math.random()*6+1);        //Random number generator between 1-6
let diceImage="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",diceImage);      //Manipulate image src using setAttribute() method

let randomNumber2=Math.floor(Math.random()*6+1);
let dice2Image="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2Image);

if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="🏁 Player 1 wins";  //querySelectorAll -> gotta mention index values like in arrays
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🏁";       //queryselector -> Don't have to mention the index values.
} else{
    document.querySelector("h1").innerHTML="DRAW! 🏳️";
}