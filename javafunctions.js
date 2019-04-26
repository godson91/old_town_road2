// //Define a function
// function saySomething(something) {
// 	console.log(something);
// }

// saySomething('Hello function!'); //logs 'hello function!'


// function add(number1, number2) {
// 	return number1 + number2;
// }

// var sum = add(1,2);
// console.log(sum); // 3

// function eat(food, drink) {
// 	return food + drink;
// }

// var full = add(1,2);
// console.log(full);


// function add(a,b) {
// 	console.log(a,b)
// }

// add(1); // '1,undefined'
// add(1,2,3,4,5) // '1,2'


// function add(a=3,b=2) {
// 	console.log(a-b)
// }

// add(); // still prints 3


// //template of function
// function nameFunction() {
// 	//whatever the function does;
// }


// function add() {
// 	var sum = 0;
// 	for(var i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
	
// console.log(add(1,2,3,4,5,6,7,8));
function daddy(heybaby){
	alert("Stop eating!! Your Ova Weight!! " + heybaby);
}



// var wow = "this is per week"
// var gas = 200
// var food = 50
// var billAmount = 100
// function grat(multi) {
// var paythis = (0.2 * multi);
// return paythis;
// }

// daddy(grat(gas));


// function totalWithGrat(originalAmount) {
// 	return grat(originalAmount) + originalAmount;
// }
// daddy(totalWithGrat(gas));


// function add() {
// 	var sum = 0;
// 	for(var i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
	
// add(1,2,3,4,5,6,7,8);





//part2 funciton practice exercise

// var calculator = {
// 	add: function(a,b) {
// 		return a + b;
// 	}
// }

// daddy(calculator.add(2,3)); // 5


// var arrayOfMystery = [
//     ['anonymous','array'],
//     { name: 'anonymous object' },
//     function(){ return 'Anonymous Function!'}
// ];

// console.log(arrayOfMystery[1]); // array
// console.log(arrayOfMystery[1].name); // anonymous object
// console.log(arrayOfMystery[2]()); // anonymous function!


function ani(){
		document.getElementById('theimage').style.display = 'block'
		$('#theimage').addClass("imageRot")
	};
function ani2() {
		document.getElementById('theimage').style.display = 'none'
	

			//rock,		//paper		//scissors
};

// $("#theimage").on("click", function(){       
//     $(this).addClass("imageRot").one('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function () {
//         $(this).removeClass("imageRot"); //remove anim class
//         var url = $(this).data('linkurl'); //get url from data-attribute
//         $( ":mobile-pagecontainer" ).pagecontainer( "change", url); //navigate to page      
//     });
// })

var hands = ['chicken', 'burgers', 'pasta'];
var user_answer;
document.getElementById("chicken").addEventListener("click",function(){
user_answer = hands[0]; 
playGame();
} );
document.getElementById("burgers").addEventListener("click",function(){
user_answer = hands[1]; 
playGame();
} );
document.getElementById("pasta").addEventListener("click",function(){
user_answer = hands[2]; 
playGame();
} ); 


function getHand()
{
	return hands[parseInt(Math.random()*10)%3];
}

var player1 = {
	name: "Big Zaddy",
	//hands: getHand(),
}

var player2 = {
	name:"compton",
	//hands: getHand(),
}

function playRound(r1, r2){
	var userMe = user_answer;
	var hand2 = getHand();
	if (userMe === hand2) {
		daddy("Issa Buffet Cuhh");//its a tie
	}
	if (userMe === "chicken") {//chicken is rock
		if(hand2 === "burgers"){//burgers is paper
			daddy(player2.name + " won");
		}
	}
		else if (hand2 === "pasta"){//pasta is scissors
		daddy(player1.name + "  won");
	}
	if (hand2 === "chicken") {
		if(userMe === "burgers"){
			daddy(player2.name + " won");
		}
	}
		else if (userMe === "pasta"){
		daddy(player2.name + "  won");}
}

function playGame(){
	// for(var i=0; i < 5; i++){
		playRound(player1,player2);
	}
	console.log(user_answer + " answer belongs to the user");
	// console.log(player2.name + " computer chose this answer");


//playGame();




// shaz way
// function playgame33(userChoice, computerChoice){
// 	var winner = null;
// 	if (userChoice === computerChoice) {
// 		alert("Its a tie");
// 	}
// 	else if (userChoice === "rock" && computerChoice === "scissors") {
// 		alert("user wins");
// 	}
// 	else if (userChoice === "paper" && computerChoice === "scissors") {
// 		alert("user wins");
// 	}	
// 	else if (userChoice === "scissors" && computerChoice === "scissors") {
// 		alert("user wins");
// 	}
// 	else {
// 		alert("computer wins")
// 	}	
// 	console.log(userChoice + "was the user's choice")
// 	console.log

// }