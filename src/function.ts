
// this is function
function addNumber(num1: number, num2: number) {
    return num1 + num2;
}

let addToNumber = addNumber(2, 5);
console.log(addToNumber);

//Now i learn arrow function
const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}
const addArrowReturn = addArrow(4, 6);
console.log(addArrowReturn);


//object method
const poorUser = {
    name: "Zahid",
    balance: 5,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}
let finalBalance = poorUser.addBalance(20);
console.log(finalBalance);


// use callback function in loop

const arr: number[] = [1, 3, 5];
const square = arr.map((element: number): number => element * element);


//

const names = ['zahid', 'hasan', 'prince'];

const upperCase = names.map(name => name.toUpperCase());
console.log(upperCase);