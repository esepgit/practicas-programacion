//esta es una función que replica el comportamiento de Array.prototype.filter()

//Array.prototype.myFilter, guardo en Array.prototype la funcion myFilter, para que pueda ser llamada como array.myFilter
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    //itero sobre el array que llama a myFilter
    for(let i = 0; i < this.length; i++) {
        //llamo a la funcion flecha, por ejemplo: (item => item % 2) y le paso el elemento actualmente iterado, un índice y el array que llamó a myFilter
        if(callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    } 
    
    return newArray;
  };

  console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
  console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));
  console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index));