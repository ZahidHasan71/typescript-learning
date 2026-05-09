// map type
const arrayOfNumber: number[] = [1, 2, 3];
const arrayOfString: string[] = ['1', '2', '3'];

const arrayOfStringByMap: string[] = arrayOfNumber.map((num) => num.toString());

console.log(arrayOfStringByMap)