function rot13(str) {
    //el alfabeto lo duplico para decodificar solo sumando indices
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphabetArray = alphabet.split('');
    let positions = [];
    let originalArray = [];
    let decoded = [];

    for(let i = 0; i < str.length; i++) {
        if(/\W/.test(str[i])) {
            //pongo en un objeto la posicion y caracter del simbolo, para poder incluirlo en el resultado final despues
            positions.push({index: i, char: str[i]});
        } else {
            originalArray.push(str[i]);  
        }
    }

    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < alphabetArray.length; j++) {
            //la j debe ser menor a 26 para que no me repita el push de la letra, ya que el alfabeto esta duplicado
            if(str[i] == alphabetArray[j] && j < 26) {
                decoded.push(alphabetArray[j + 13]); 
                console.log(decoded);   
            }
        }
    }
    //agrego los simbolos al resultado final
    for(let i = 0; i < positions.length; i++) {
        decoded.splice(positions[i].index, 0, positions[i].char);
    }
 
    let strFinal = decoded.join('');
    return strFinal;
  }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));