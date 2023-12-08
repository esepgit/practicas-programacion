//Esta es una función que replica el comportamiento de función Array.prototype.map()
//this hace referencia al elemento que llamó a myMap, en este caso array.myMap
//para primer llamado this == [23, 65, 98, 5, 13]

Array.prototype.myMap = function(callback) {
  const newArray = [];

  let arrayLength = this.length;
  for(let i = 0; i < arrayLength; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

console.log([23, 65, 98, 5, 13].myMap(item => item * 2));
console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())); 
console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]));

