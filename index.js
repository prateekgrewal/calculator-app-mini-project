var var1=0;
var var2=0;
var op="+";
var screen=document.getElementById("calc-screen");
var curText="";

// fetching numbers
var zero=document.getElementById("zero");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");


// fetching top row buttons
var clear = document.getElementById("clear");
var signReverse = document.getElementById("sign-reverse");
var percentage = document.getElementById("percentage");

// fetching operators

var add = document.getElementById("add");
var sub = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equate = document.getElementById("equals");


// fetching decimals

var decimal=document.getElementById("decimal");
var point = false;
var decimalPlace=10;

// top row button functions

function AC(){
    screen.innerText = "";
    var1=0;
    var2=0;
    decimalPlace=10;
    point=false;
}

clear.addEventListener("click",AC);

function reverse(){
    var1= -var1;
    screen.innerText = var1;
}
signReverse.onclick = reverse;

function percent(){
    
    var1= var1 / 100;
    screen.innerText = var1;
}

percentage.onclick = percent;




// number pressing functions

function clickZero(){
    
    
    var1 = var1*10 + 0;
    screen.innerText = var1;
    
}
zero.onclick = clickZero;

function clickOne(){
    
    if(point==true){ 
        var1= var1 + (1/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 1;
    }
    
    screen.innerText = var1;
    
}
one.onclick = clickOne;

function clickTwo(){
    if(point==true){ 
        var1= var1 + (2/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 2;
    }
    screen.innerText = var1;
    
}
two.onclick = clickTwo;

function clickThree(){
    if(point==true){ 
        var1= var1 + (3/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 3;
    }
    screen.innerText = var1;
    
}
three.onclick = clickThree;

function clickFour(){
    if(point==true){ 
        var1= var1 + (4/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 4;
    }
    screen.innerText = var1;
    
}
four.onclick = clickFour;

function clickFive(){
    if(point==true){ 
        var1= var1 + (5/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 5;
    }
    screen.innerText = var1;
    
}
five.onclick = clickFive;

function clickSix(){
    if(point==true){ 
        var1= var1 + (6/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 6;
    }
    screen.innerText = var1;
    
}
six.onclick = clickSix;

function clickSeven(){
    if(point==true){ 
        var1= var1 + (7/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 7;
    }
    screen.innerText = var1;
    
}
seven.onclick = clickSeven;

function clickEight(){
    if(point==true){ 
        var1= var1 + (8/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 8;
    }
    screen.innerText = var1;
    
}
eight.onclick = clickEight;

function clickNine(){
   if(point==true){ 
        var1= var1 + (9/decimalPlace);
        decimalPlace= decimalPlace*10;
    }
    else{
    var1 = var1*10 + 9;
    }
    screen.innerText = var1;
    
}
nine.onclick = clickNine;



// operator functions

function addition(){
    decimalPlace=10;
    point=false;
    curText = screen.innerText;
    op = "+";
    var2 = var1;
    var1=0;
    
    screen.innerText =curText +" "+ "+" ;
}
add.onclick = addition;

function subtraction(){
    decimalPlace=10;
    point=false;
    
    curText = screen.innerText;
    op = "-";
    var2 = var1;
    var1=0;
    
    screen.innerText =curText +" "+ "-" ;
}
sub.onclick = subtraction;

function multiplication(){
    decimalPlace=10;
    point=false;
    curText = screen.innerText;
    op = "*";
    var2 = var1;
    var1=0;
    
    screen.innerText =curText +" "+ "*" ;
}
multiply.onclick = multiplication;

function division(){
   decimalPlace=10;
    point=false;
    
    curText = screen.innerText;
    op = "/";
    var2 = var1;
    var1=0;
    
    screen.innerText =curText +" "+ "/" ;
}
divide.onclick = division;

function evaluate(){
    var ans=0;
    decimalPlace=10;
    point=false;
    
    if(op == "+"){
        ans = var1 + var2;
        screen.innerText = ans;
    }
    else if(op == "-"){
        ans = var2 - var1;
        screen.innerText = ans;
    }
    else if(op == "*"){
        ans = var1 * var2;
        screen.innerText = ans;
    }
    else if(op == "/"){
        ans = var2 / var1;
        screen.innerText = ans;
    }
    
    else{
        screen.innerText = "Not Working";
    }
    var1 =ans;
    
    
}

equate.onclick = evaluate;



// decimal function

function addDecimal(){
    point=true;
}

decimal.onclick = addDecimal;