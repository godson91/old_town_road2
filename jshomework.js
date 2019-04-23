// var kitchenlist = ["pop tarts", "ramen", "noodles", "chips", "salsa", "coffee"];
//kitchenlist [6] = "fruit loops"//my first answer without trying to use push 
// kitchenlist [5] = "fair trade coffee"

// kitchenlist.push('fruit loops');

//starts at 3,take away 2 from the starting point 3, then add the strings you input afterwards sssooo dope bro
//  kitchenlist.splice (3,2, "rice","beans");
//  console.log(kitchenlist);

// var walmartkart = [];
// kitchenlist.pop();
// console.log(kitchenlist);


// walmartkart.push(kitchenlist.pop());
// walmartkart.push('fruit loops');
// console.log(walmartkart);

// kitchenlist.shift();
// console.log(kitchenlist);
 // walmartkart.push("pop tarts");
 // console.log(walmartkart);

// walmartkart.push(kitchenlist.pop(kitchenlist.reverse));

//  while (kitchenlist.length !=0)
//  {
//  	walmartkart.push(kitchenlist.pop());
//  	console.log(walmartkart);
//  }


// walmartkart.reverse(walmartkart.sort());



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


//exercise2: Objects


//exercise2: Practice
// var course = {
// 	name: 'JavaScript Applications',
// 	awesome: true,
// 	teachers: ['Assaf', 'Shane'],
// 	students: [
// 		{
// 			name: 'Steve',
// 			computer: {
// 				OS: 'Linux',
// 				type: 'laptop'
// 			}
// 		}
// 	]
// };

// console.log(course.students[0].computer.OS);

// course.name = "super duper class";
// console.log(course.name);

// course.fun = true; //add a property
// delete course.name; //remove one
// console.log(course);

// exercise2 code
var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}

 };


//exercise2 homework
console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].computer.type);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment);
console.log(course.preReqs.equipment.OSOptions.join(' or '));

var OS = course.students.filter((stud) => {
  return stud.computer.OS === 'OSX';
 });
console.log(OS);





//class notesc
// var name_of_object = {
// 	key: value
// }

//redeclare/reassigning a var is important terms for coding


// console.log(dog.name,dog.coat,dog.siblings)



