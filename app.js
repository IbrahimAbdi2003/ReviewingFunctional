// function alphabeticalOrder(arr) {
//     return arr.sort();
//   }
  
//   alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  
//   console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
//   console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])); 
//   console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));



//   var globalArray = [5, 6, 3, 2, 9];
//   function nonMutatingSort(arr) {
//     return [].concat(arr).sort(function(a, b) {
//       return a - b;
//     });
//     // Add your code above this line
//   }
//   nonMutatingSort(globalArray);

// function splitify(str) {
//     return str.split(/\W/);
//   }
//   splitify("Hello World,I-am code");

// function sentensify(str) {
//     return str.split(/\W/).join(" ");
//   }
//   sentensify("May-the-force-be-with-you");

// var globalTitle = "Winter Is Coming";

// function urlSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .split(/\s+/)
//     .join("-");
// }

// var winterComing = urlSlug(globalTitle);

// function checkPositive(arr) {
  
//     return arr.every(val => val > 0);
//   }
//   checkPositive([1, 2, 3, -4, 5]);

// function checkPositive(arr) {
//     return arr.some(elem => elem > 0);
//   }
//   checkPositive([1, 2, 3, -4, 5]);

// function add(x) {
//     return function(y) {
//       return function(z) {
//         return x + y + z;
//       };
//     }
//   }
//   add(10)(20)(30);