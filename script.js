// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       //ES6 [days[4]] in place of thu
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   //using object decostructing to set parameters
//   //new syntax in ES6 for methods
//   delivery({ address, time, starterIndex, mainIndex }) {
//     console.log(
//       `Your delivery items are: ${this.starterMenu[starterIndex]},${this.mainMenu[mainIndex]},these will be shipped by ${time} at ${address}.`
//     );
//   },
//   createPizza: function (ing1, ing2, ing3) {
//     console.log(`Your pizza will be made with ${ing1},${ing2},${ing3}`);
//   },
// };

// //one argument but in object form
// restaurant.delivery({
//   address: '281 Jahanara Manjil',
//   time: '22:00',
//   starterIndex: 2,
//   mainIndex: 0,
// });

// //Destructuring arrays
// // //before we used to destructure arrays in the following was:
// // const a = restaurant.categories[0];
// // const b = restaurant.categories[1];
// // console.log(a, b);

// //but after ES6,it is possible to destruture arrays in the following way
// let [x, y] = restaurant.categories;
// console.log(x, y);

// //skipping one element in the arrray
// let z;
// [x, , z] = restaurant.categories;
// console.log(x, z);

// //assigning default values
// [x, y = 1, z] = restaurant.categories;
// console.log(x, y, z);

// //interchangig values
// //previously:
// // let temp = restaurant.categories[0];//do this with arraydeconstructing
// // restaurant.categories[0] = restaurant.categories[1];
// // restaurant.categories[1] = temp;
// // [x, y] = restaurant.categories;
// // console.log(x, y);

// // //after ES6 interchaning
// // [x, y] = restaurant.categories;
// // [x, y] = [y, x]; //the op line
// // console.log(x, y);

// //nested array
// const arr = ['no1', 'no2', ['no11', 'no12']]; //always remember to put array elements inside ''
// [x, , [y, z]] = arr;
// console.log(x, y, z);

// //deconstructing objects
// //works similar to arrays but the varianble name has to be specific to object names:
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //renaming the variables
// const {
//   name: nameOfRest,
//   openingHours: hours,
//   categories: tags,
//   location: newLocation,
// } = restaurant;
// console.log(nameOfRest, hours, tags, newLocation);

// //The spread operaator
// //Basically DECONSTRCUTS the whole array,objects,strings(iterables)
// console.log(...restaurant.categories);

// //merging two or more arrays
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

// //cloning a shallow copy of an object
// const newRestaurant = { ...restaurant, foundedIn: 1990 }; //we also added new property foundedIn
// console.log(newRestaurant);
// //cloning with the .assign operator
// const newRestaurant2 = Object.assign({}, restaurant);
// console.log(newRestaurant2);

// //callingFunction with spread argument
// //difference between this and using objects is in the parameters of the function
// const ingredients = ['pineapple', 'sausage', 'cheese'];
// restaurant.createPizza(...ingredients);

// //***important distinction between rest and spread operators.They look exactly the same but work in opposite ways.The rest operator packs stuff into an array while the spread opeator unpacks stuff from an array.Moreover, the rest operator is used where variable are separated by commas(left side of = sign) and the spread operator sits where the values of those variables are supposed to sit (right side of = sign)
// const [a, b, ...others] = [1, 2, [3, 4, 5]];
// console.log(a, b, others);
// const [item1, item2, ...otherItems] = fullMenu;
// console.log(...fullMenu);
// console.log(item1, item2, otherItems);

// //The for-of loop
// //With for  loop
// console.log('for loop:');
// for (let item = 0; item < fullMenu.length; item++) {
//   console.log(fullMenu[item]);
// }
// //WIth for of loop
// console.log('for of loop:');
// for (const item of fullMenu) console.log(item);
// //working with Index of array with for of arrays
// for (const item of fullMenu.entries()) {
//   console.log(`${item[0] + 1}:${item[1]}`); //bad method
// }
// for (const [no, item] of fullMenu.entries()) {
//   console.log(`${no + 1}:${item}`); //better method
// }
// for (let i = 0; i < fullMenu.length; i++) {
//   console.log(`${i + 1}:${fullMenu[i]}`); //best og method
// }
// console.log(...fullMenu.entries());

// //Enhanced Object literals
// //improved syntaxes basically,check line 32.

// //Optional Chaining
// //generally we solve like this:
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   // console.log(restaurant.openingHours.fri.open); //exists
//   console.log(restaurant.openingHours.mon.open); //doesnt''
// }
// //But with optional chaining it's easier
// //It checks if the restaurant.openinghours.mon actually exists or not(not null or undefined(nullish operator)).If it exists then proceeds to .open and if it doesn't exist,i.e it is null or undefined then it  returns undefined.
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);
// //multiple optional chaings
// console.log(restaurant.openingHours?.mon?.open); //line 154 shortcut
// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; //nullish(??) instead of || bbecause gives closed for sat(open=0 which is falsy value).
//   //optional chaining and nullish operator (??) are almost always used together
//   console.log(`On ${day}, we open at ${open}`);
// }
// //Methods(functions of objects) check using optional chaining
// console.log(restaurant.createPizza?.(0, 1, 2) ?? 'Method does  not exist'); //doesn't work as intended

// //Optional chaining in arrays
// const users = [{ name: 'Jonas', email: 'helojoas@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');
// //alternate before way
// if (users.length > 0) {
//   console.log(console.log(users[0].name));
// } else {
//   console.log('User array empty');
// }

// //Looping objects,keys,values and entries

// //looping property names(keys)
// const properties = Object.keys(openingHours); //object.keys turns opening hours object into an array
// console.log(properties); //proof that it's an array
// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   //arrayElement of array
//   openStr += `${day}, `; //concatanating strings
// }
// console.log(openStr);

// //looping over property values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries); //gives whole object in nested array which we can loop over. remember we can't directly for of loop over objects.this indirect looping
// for (const [day, { open, close }] of entries) {
//   console.log(`We are open on ${day} starting from ${open} to ${close}`);
// }

// //Sets
// //Only has unique values
// //no way of getting values out from a set
// console.log(new Set('Jonas'));
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Risotto']);
// console.log(ordersSet);
// console.log(ordersSet.size); //similar to .length
// console.log(ordersSet.has('Pizza')); //similar to .includes
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto'); //similar to .remove
// console.log(ordersSet); //adds only one as only unique values

// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];
// let staffUnique = new Set(staff);
// console.log(...staffUnique);
// //converting set to array
// staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set('YaseenNurTaz').size);

// //Maps
// //kinda like objects but can have any value for key whereas objects only take strings for keys

// const rest = new Map();
// rest.set('name', 'Classico Italiono'); //here set works as add
// rest.set(1, 'Firenze,Italy');
// rest.set(2, 'Lisbon, Portugal');
// //returns same value to console
// console.log(rest);
// console.log(rest.set(2, 'Lisbon, Portugal'));

// //chaining
// rest
//   .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// //Get mehod
// console.log(rest.get('name')); //has to be exact key
// console.log(rest.get(true));

// //power of boolean in maps
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //unreadble so dont use often

// //method for maps
// console.log(rest.has('categories'));
// console.log(rest.delete(2));
// console.log(rest.size);

// //using arrays as keys in maps
// const arrTest = [1, 2];
// rest.set(arrTest, 'Test');
// console.log(rest);
// //dom element
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// //Better way to create maps without the set method
// //array inside array(nested arrays)
// const question = new Map([
//   ['Question', "What's the best programming language?"],
//   [1, '1.Python'],
//   [2, '2.Java'],
//   [3, '3.JavaScript'],
//   ['Correct Answer', 3],
//   [true, 'Correct 👏'],
//   [false, 'Incorrect 🚫'],
// ]);

// console.log(question);

// //Maps---->Arrays
// console.log(...question);
// console.log(...question.entries()); //same as map itself

// //spread on map
// console.log(...question.keys());
// console.log(...question.values());

// //Objects---->Maps
// console.log(Object.entries(openingHours)); //therefore it's actually the right hand side of the map.
// const openingHoursMap = new Map(Object.entries(openingHours));
// console.log(openingHoursMap);

// //Quiz App
// console.log(question.get('Question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(value);
//   }
// }
// // const quizAnswer = Number(
// //   prompt('Your answer in serial of possible answers: ')
// // );
// const quizAnswer = 3;
// quizAnswer === question.get('Correct Answer')
//   ? console.log(question.get(true))
//   : console.log(question.get(false));
// //alternative way
// console.log(question.get(question.get('Correct Answer') === quizAnswer));

//Strings
//works like arrays
const airLine = 'TAP Portugal Airlines';
const plane = 'Airbus B737neo';

//methods on strings(it works because behind the scenes javascript coneverts the string into an object and the returns it back to the primtive state upon completion of the method that was called)
//for example
console.log(new String('Jonas')); //this is demonstration of how a string converted to object looks like
console.log(typeof new String('Jonas')); //proof that it's object
console.log(typeof new String('Jonas').indexOf('n')); //proof that Javascript always turn the string object back to pimitive string after completion of called method on the string

//finding character with index
console.log(plane[0]); //index gives the character
console.log('B737'[0]);

//length
console.log(plane.length);
console.log('B737'.length);

//finding index of character
console.log(airLine.indexOf('r')); //gives first occurrence of char.
console.log(airLine.lastIndexOf('r')); //gives last occurrence of char.
console.log(airLine.indexOf('Portugal')); //Gives indexof 1st charWord

//slicing
console.log(airLine.slice(4)); //starts from the input index
console.log(airLine.slice(4, 12)); //ends before last input index

console.log(airLine.slice(0, airLine.indexOf(' '))); //gives 1st word
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1)); //gives last word

console.log(airLine.slice(-1));
console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

//Example
const checkMiddleSeat = function (seat) {
  //B and E are middle searts
  const seatChar = seat.slice(-1);
  if (seatChar === 'B' || seatChar === 'E') {
    console.log('You got middle seat 😂');
  } else {
    console.log('You got lucky 😉');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('13D');
checkMiddleSeat('1E');

//uppercase,lowerCase,whiteSpaces
const passenger = 'YasEEN';
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

const email = 'helloyaseen@gmail.com';
const loginEmail = '   helloyaSEEn@gMail.com \n';
const normalizedEmail = loginEmail.trim().toLowerCase();
console.log(normalizedEmail);

//replace method
const priceGB = '299,78pounds';
const priceUS = priceGB.replace('pounds', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //targets first occurence only
console.log(announcement.replace(/door/g, 'gate')); //targets all occurrences with regular expression. //g stands for global

//Booleans
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
} else {
  console.log('Old model');
}

//Example
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on the plane.');
  } else {
    console.log('welcome Aboard');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and Books');
checkBaggage('No guns or knives');

//Split and Join
const plusName = 'My+name+is+Yaseen+Nur';
console.log(plusName.split('+')); //splits the sentence with tagged symbol and arranges in an array
console.log(plusName.split('+').join(' ')); //join the elements in an array with prescribed char.

//Example:
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase + n.slice[1]);
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');

//Padding
const message = 'Got to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); //the first input signifies the total length of the string
console.log('Jonas'.padStart(20, '+').padStart(30, '+'));

//Example
const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};
maskCreditCard('1156464513');
maskCreditCard('45632187');

//repeat method
//repeatd the same string multiple times
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(4);
planesInLine(8);
planesInLine(12);
