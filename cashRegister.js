//se le pasa un precio, el dinero con el que se pago y el detalle de la cantidad de monedas y billetes
//devuelve un estatus y el detalle de la cantidad de monedas/billetes usados en el vuelto
function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let money = cid.reverse();
    let globalValue = 0;
    let changeArray = [];
    let result = {};
    
    if(change >= 100) {
        let count = 0;
        for(let i = 100; i <= money[0][1]; i += 100) {
            if(change >= 100) {
                change -= 100;
                count++;
                globalValue = 100 * count;   
            }
        }
        changeArray.push(["ONE HUNDRED", globalValue]);
    }

    if(change >= 20) {
        let count = 0;
        for(let i = 20; i <= money[1][1]; i += 20) {
            if(change >= 20) {
                change -= 20;
                count++;
                globalValue = 20 * count;   
            }
        }
        changeArray.push(["TWENTY", globalValue]);
    }

    if(change >= 10) {
        let count = 0;
        for(let i = 10; i <= money[2][1]; i += 10) {
            if(change >= 10) {
                change -= 10;
                count++;
                globalValue = 10 * count;    
            }
        }
        changeArray.push(["TEN", globalValue]);
    }

    if(change >= 5) {
        let count = 0;
        for(let i = 5; i <= money[3][1]; i += 5) {
            if(change >= 5) {
                change -= 5;
                count++;
                globalValue = 5 * count;   
            }
        }
        changeArray.push(["FIVE", globalValue]);
    }

    if(change >= 1) {
        let count = 0;
        for(let i = 1; i <= money[4][1]; i += 1) {
            if(change >= 1) {
                change -= 1;
                count++;
                globalValue = 1 * count;    
            }
        }
        changeArray.push(["ONE", globalValue]);
    }

    if(change >= 0.25) {
        let count = 0;
        for(let i = 0.25; i <= money[5][1]; i += 0.25) {
            if(change >= 0.25) {
                change -= 0.25;
                count++;
                globalValue = 0.25 * count;  
            }
        }
        changeArray.push(["QUARTER", globalValue]);
    }

    if(change >= 0.1) {
        let count = 0;
        for(let i = 0.1; i <= money[6][1]; i += 0.1) {
            if(change >= 0.1) {
                change -= 0.1;
                count++;
                globalValue = 0.1 * count;   
            }
        }
        changeArray.push(["DIME", globalValue]);
    }

    if(change >= 0.05) {
        let count = 0;
        for(let i = 0.05; i <= money[7][1]; i += 0.05) {
            if(change >= 0.05) {
                change -= 0.05;
                count++;
                globalValue = 0.05 * count;   
            }
        }
        changeArray.push(["NICKEL", globalValue]);
    }

    if(change >= 0.01) {
        let count = 0;
        for(let i = 0.01; i <= money[8][1]; i += 0.01) {
            if(change.toFixed(2) >= 0.01) {
                change -= 0.01;
                count++;
                globalValue = 0.01 * count;  
            }
        }
        changeArray.push(["PENNY", globalValue]);
    }

    //esto porque change nunca será igual a cero por sus decimales (ej: 0.00009999)
    let intChange = change.toFixed(1);
    console.log(intChange);

    if(intChange > 0) {
        result = {status: "INSUFFICIENT_FUNDS", change: []}

    } else if(intChange == 0 && money[8][1] < 1 && money[7][1] < 1 && money[6][1] < 1 && money[5][1] < 1 && money[4][1] < 1 && money[3][1] < 1 && money[2][1] < 1 && money[1][1] < 1 && money[0][1] < 1) {
        result = {status: "CLOSED", change: cid.reverse()} 
        
    } else {
        result = {status: "OPEN", change: changeArray}
    }

    return result;
}
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));