function convertToRoman(num) {
  let number = num.toString();
  let roman = "";
  
  if(number.length == 4) {
    roman = "M".repeat(number[0]);

    if(number[1] == 9) {
      roman = roman + "CM";
    } else if(number[1] >= 5) {
        if(number[1] == 5){
          roman = roman + "D";
        } else {
          let repeat = number[1] - 5;
          roman = roman + "D" + "C".repeat(repeat);
        }
    } else if(number[1] == 4) {
      roman = roman + "CD";
    } else if(number[1] >= 1) {
      roman = roman + "C".repeat(number[1]);
    } 


      if(number[2] == 9) {
      roman = roman + "XC"; 
      } else if(number[2] >= 5) {
          if(number[2] == 5) {
            roman = roman + "L";
          } else {
            roman = roman + "L" + "X".repeat(number[2] - 5);
          }
      } else if(number[2] == 4) {
        roman = roman + "XL";
      } else if(number[2] >= 1) {
        roman = roman + "X".repeat(number[2]);
      }

      if(number[3] == 9) {
        roman = roman + "IX";
      } else if(number[3] >= 5) {
          if(number[3] == 5) {
            roman = roman + "V";
          } else {
            roman = roman + "V" + "I".repeat(number[3] - 5);
          }
      } else if(number[3] == 4) {
        roman = roman + "IV";
      } else if(number[3] >= 1) {
        roman = roman + "I".repeat(number[3]);
      }


  } else if(number.length == 3) {


    if(number[0] == 9) {
      roman = roman + "CM";
    } else if(number[0] >= 5) {
        if(number[0] == 5){
          roman = roman + "D";
        } else {
          let repeat = number[0] - 5;
          roman = roman + "D" + "C".repeat(repeat);
        }
    } else if(number[0] == 4) {
      roman = roman + "CD";
    } else if(number[0] >= 1) {
      roman = roman + "C".repeat(number[0])
    } 


      if(number[1] == 9) {
      roman = roman + "XC"; 
      } else if(number[1] >= 5) {
          if(number[1] == 5) {
            roman = roman + "L";
          } else {
            roman = roman + "L" + "X".repeat(number[1] - 5);
          }
      } else if(number[1] == 4) {
        roman = roman + "XL";
      } else if(number[1] >= 1) {
        roman = roman + "X".repeat(number[1]);
      }

      if(number[2] == 9) {
        roman = roman + "IX";
      } else if(number[2] >= 5) {
          if(number[2] == 5) {
            roman = roman + "V";
          } else {
            roman = roman + "V" + "I".repeat(number[2] - 5);
          }
      } else if(number[2] == 4) {
        roman = roman + "IV";
      } else if(number[2] >= 1) {
        roman = roman + "I".repeat(number[2]);
      }


  } else if(number.length == 2) {


    if(number[0] == 9) {
      roman = roman + "XC"; 
      } else if(number[0] >= 5) {
          if(number[0] == 5) {
            roman = roman + "L";
          } else {
            roman = roman + "L" + "X".repeat(number[0] - 5);
          }
      } else if(number[0] == 4) {
        roman = roman + "XL";
      } else if(number[0] >= 1) {
        roman = roman + "X".repeat(number[0]);
      }

      if(number[1] == 9) {
        roman = roman + "IX";
      } else if(number[1] >= 5) {
          if(number[1] == 5) {
            roman = roman + "V";
          } else {
            roman = roman + "V" + "I".repeat(number[1] - 5);
          }
      } else if(number[1] == 4) {
        roman = roman + "IV";
      } else if(number[1] >= 1) {
        roman = roman + "I".repeat(number[1]);
      }

  } else {


    if(number[0] == 9) {
      roman = roman + "IX";
    } else if(number[0] >= 5) {
        if(number[0] == 5) {
          roman = roman + "V";
        } else {
          roman = roman + "V" + "I".repeat(number[0] - 5);
        }
    } else if(number[0] == 4) {
      roman = roman + "IV";
    } else if(number[0] >= 1) {
      roman = roman + "I".repeat(number[0]);
    }


  }
  return roman;
}
 
 console.log(convertToRoman(158));




