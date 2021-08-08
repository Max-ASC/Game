//Bouncing Ball Variables
let xPos = 250;
let yPos = 250;

//Stationary Square Variables
let square1XPos = 100;
let square1YPos = 100;

let square2XPos = 400;
let square2YPos = 100;

let square3XPos = 100;
let square3YPos = 400;

let square4XPos = 400;
let square4YPos = 400;

//Speed & Directions
let xSpeed;
let ySpeed;

let xDirection = 1;
let yDirection = 1;

//Hitbox stuff
let myLeft;
let myRight;
let myTop;
let myBottom;

let square1Left, square1Right, square1Top, square1Bottom;
let square2Left, square2Right, square2Top, square2Bottom
let square3Left, square3Right, square3Top, square3Bottom;
let square4Left, square4Right, square4Top, square4Bottom;

//Score
let score1 = 0
let score2 = 0
let message1 = "Your Score: ";
let message2 = "Bouncy Score: ";

//States
let state = 1

 
function setup() {
   createCanvas(500, 500);
   background(0);

   rectMode(CENTER)

}
 
function draw() {
   background(0);
   fill(255,255,255)
   textSize(15)
   text(message2, 0, 25)
   text(score2, 100, 25)
   text("Click the bouncing square 10 times before the Bouncy score hits 100", 10,250)
   text(message1, 390, 25)
   text(score1, 475, 25)

   //Bouncing Square
   fill(255, 255, 255);
   rect(xPos, yPos, 50, 50);

   //Stationary Squares
   fill(255,0,0)
   rect(square1XPos, square1YPos, 50, 50)

   fill(0,255,0)
   rect(square2XPos, square2YPos, 50, 50)

   fill(0,0,255)
   rect(square3XPos, square3YPos, 50, 50)

   fill(0,255,255)
   rect(square4XPos, square4YPos, 50, 50)

   //Bouncing Square speed & bounce
   xPos = xPos + (4 * xDirection)
   yPos = yPos + (6 * yDirection)
  

   if (xPos < 25 || xPos > 475){
       xDirection *= -1
   }
   if (yPos < 25 || yPos > 475){
    yDirection *= -1
}
  
   myLeft = xPos - 25
   myRight = xPos + 25
   myTop = yPos - 25
   myBottom = yPos + 25

   square1Left = square1XPos - 25
   square1Right = square1XPos + 25
   square1Top = square1YPos - 25
   square1Bottom = square1YPos + 25
  
     if (myLeft > square1Right || myRight < square1Left || myTop > square1Bottom || myBottom < square1Top){

   } else {
       // fill(255,255,255)
       // textSize(22)
       score2 += 1
    //    text("I'm colliding", 150, 480)
   }

   //square 2
   myLeft = xPos - 25
   myRight = xPos + 25
   myTop = yPos - 25
   myBottom = yPos + 25

   square2Left = square2XPos - 25
   square2Right = square2XPos + 25
   square2Top = square2YPos - 25
   square2Bottom = square2YPos + 25
  
     if (myLeft > square2Right || myRight < square2Left || myTop > square2Bottom || myBottom < square2Top){

   } else {
       // fill(255,255,255)
       // textSize(22)
       score2 += 1
    //    text("I'm colliding", 150, 480)
   }

   //square 3
   myLeft = xPos - 25
   myRight = xPos + 25
   myTop = yPos - 25
   myBottom = yPos + 25

   square3Left = square3XPos - 25
   square3Right = square3XPos + 25
   square3Top = square3YPos - 25
   square3Bottom = square3YPos + 25
  
     if (myLeft > square3Right || myRight < square3Left || myTop > square3Bottom || myBottom < square3Top){

   } else {
       // fill(255,255,255)
       // textSize(22)
       score2 += 1
    //    text("I'm colliding", 150, 480)
   }
   
   //square 4
   myLeft = xPos - 25
   myRight = xPos + 25
   myTop = yPos - 25
   myBottom = yPos + 25

   square4Left = square4XPos - 25
   square4Right = square4XPos + 25
   square4Top = square4YPos - 25
   square4Bottom = square4YPos + 25
  
     if (myLeft > square4Right || myRight < square4Left || myTop > square4Bottom || myBottom < square4Top){

   } else {
       // fill(255,255,255)
       // textSize(22)
       score2 += 1
    //    text("I'm colliding", 150, 480)
   }

   if (state == 2){
       background(255)
       fill(0,0,0)
       textSize(50)
       text("You Win!", 250, 250)

       rect(0,0,100)
       fill(255,255,255)
       textSize(15)
       text("Reset",5,25)
   }
   if (state == 3){
    background(255)
    fill(0,0,0)
    textSize(50)
    text("You Lose!", 250, 250)

    rect(0,0,100)
    fill(255,255,255)
    textSize(15)
    text("Reset",5,25)
   }
  
   if (state == 1 && score2 > 100){
    state = 3
}

}

function mouseClicked(){
    if (mouseX > myLeft && mouseX < myRight && mouseY > myTop && mouseX < myBottom){
    // state = "red"
    score1 += 1
    }
    if (state == 1 && score1 > 10){
        state = 2
    }
    if(state == 2 || state == 3){
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseX < 100){
        score1 = 0
        score2 = 0
        state = 1
        }
    }
}
