var kitchenlist = ["pop tarts", "ramen", "noodles", "chips", "salsa", "coffee"];
//kitchenlist [6] = "fruit loops"//my first answer without trying to use push 
kitchenlist [5] = "fair trade coffee"

kitchenlist.push('fruit loops');

//starts at 3,take away 2 from the starting point 3, then add the strings you input afterwards sssooo dope bro
 kitchenlist.splice (3,2, "rice","beans");
 console.log(kitchenlist);

var walmartkart = [];
kitchenlist.pop();
console.log(kitchenlist);


walmartkart.push(kitchenlist.pop());
// walmartkart.push('fruit loops');
// console.log(walmartkart);

// kitchenlist.shift();
// console.log(kitchenlist);
 walmartkart.push("pop tarts");
 console.log(walmartkart);

walmartkart.push(kitchenlist.pop(kitchenlist.reverse));

 while (kitchenlist.length !=0)
 {
 	walmartkart.push(kitchenlist.pop());
 	console.log(walmartkart);
 }


walmartkart.reverse(walmartkart.sort());




// walmartkart.sort();
// walmartkart.reverse();
// console.log(walmartkart);

// console.log(walmartkart.join(" , "));


//kitchen.length=7,i starts count from 0, continue running until i is greater than 7, i++ starts running on 2nd loop
//keep running this for loop until length of kitchenlist is greater than "i" then stop;
// for (var i = 0; i < kitchenlist.length; i++) {
// 	console.log(kitchenlist[i]);
// }

// console.log(kitchenlist.length);//counts how many strings are inside the array
// console.log(kitchenlist);



// kitchenlist.pop();//deletes strings in the array from the back first
// kitchenlist.push();//creates new space at the end of the array and push it to the back
