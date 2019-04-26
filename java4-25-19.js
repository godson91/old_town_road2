// function greetOnLoad () {
//     var name = prompt("Hi! What's your name?");
//     var myelement = document.getElementById("greeting");
//     greeting.innerHTML= "Hello " + name + ", it's nice to meet you!";
// }



// function greetOnLoad () {
//     var name = prompt("Hi! What's your name?");
//     var myelement_parent = document.getElementById("greeting");
//     for(var i = 0; i < 5; i++) {
//     	myelement_parent.append("hey I am supa hot " + name + "\n")
//     }
    
// }

// greetOnLoad();

//this total scope is called: anyonymous function
// var penguin = {
// 	name: "Big Zaddy!",
// 	Tuxedo_color: "black",
// 	Smiwspeed: 100,
// 	sayMyName: function(){//this is called a functional property
// 		console.log(this.Smiwspeed)
// 	}
// }


// penguin.sayMyName();//this calls "sayMyName" function 





// Document Object Model
// .addEventlistener; listening to the funciton to set off


// document.getElementById("myButton").addEventListener("Click" ,myFunction1);
// function myFunction1() {
// 	console.log("I've been clicked!");
// }
//  selector - wher
//  add event listener - when
//  function - what
// getElementById
// getElementByTagName
// querySelector
// querySelectorAll
// OnPageLoad
// onreSize


// for loop template (instiate variable, condition to run, increment)
// 	what you want to happen during each cycle


// document.getElementById("avengers").onPageLoad



//Notes: 
// History
// HTML5 pushstate

// ​The history.pushState() method adds a state to the browsers history.
// function daddy(heybaby){
// 	alert("this is way too much money spending $"+ heybaby);
// }
 

// var stateObj = { foo: "bar" };
// history.pushState(stateObj, "page 2", "bar.html");
// //Running the above code will cause the URL bar to display http://your-site-name.com/bar.html

// daddy(pushState());
//takes three parameters: 

// a state object
// a title (which is currently ignored)
// an optional URL

// Dimensions and Position
// window.innerWidth returns the inner width of a window's content area.
// window.innerHeight returns the inner height of a window's content area. 
// note: these properties are read-only.

// Dimensions and Position
 

// Another nifty feature is window.scrollY and window.scrollX

// X and Y represent the X and Y axis of the window

// Y is the number of pixels that the document is currently scrolled from the top
// X is the number of pixels that the document is currently scrolled from the left
// ​

// // scroll to the bottom of a page and then paste this into the console

// if (window.scrollY) {
//   window.scroll(0, 0);  // will reset the scroll position to the top left of the document.
// }
// var y = window.scrollY;

// window.scroll(0, 0);

// window.scroll(0, y);

// localStorage & sessionStorage
// Storage objects are simple key-value pairs (similar to objects) they stay intact through page loads.  

// The keys can be strings or integers
// The values are always strings.  
// You can access these values like an object 
// Or with the getItem() and setItem() methods. 
// ​
// The sessionStorage property allows you to access a session Storage object. 

// Data stored in sessionStorage gets cleared when the page session ends.

// A page session lasts for as long as the browser is open and survives over page reloads

// Opening a page in a new tab or window will cause a new session to be initiated


// localStorage while property similar to sessionStorage has: 

// no expiration time

// persists even when the browser is closed and re-opened​

// The setItem() method will add (or update) a key/value pair to the Storage object

 

 

// While the getItem() method will return that key's value.


// Mozilla has a great demonstration at http://mdn.github.io/web-storage-demo/

// localStorage.setItem('bgcolor', 'aqua');
// localStorage.getItem('bgcolor'); // "aqua"



// Serialization
// This is a great time to introduce the idea of serialization...

// You may have noticed that these key/value pairs resemble JSON. However, Attempting to store a JSON object in local storage will result in an error. 

// Local storage requires you to store strings of information. 

// To store a JSON object in local storage you will need to convert it into a JSON-formatted string, using the JSON.stringify() function.

var user = {
  name : "Shane",
  job : "instructor"
};

var storeUser = JSON.stringify(user);

localStorage.setItem('userInfo', storeUser);

localStorage.getItem('userInfo');
// "{"name":"Shane","job":"instructor"}"

var parsedData = localStorage.getItem('userInfo');

console.log(parsedData);
// {"name":"Shane","job":"instructor"}









