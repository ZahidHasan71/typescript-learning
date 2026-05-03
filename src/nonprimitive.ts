// Non primitive data type
//array

let bazarList = ["milk", "sugar", "salt"];
bazarList.push("butter");
// console.log(bazarList);

let mixBazar: (string | number)[] = ["milk", 5, "egg", 10, "Banana", 20];

mixBazar.push(12);
mixBazar.push("Chicken")

// tuple

let personInfo: [string, string, number] = ['prince', 'bangladesh', 24]

// object

const user: {
    readonly organization: "programming hero"; //excess modifier
    firstName: string;
    middleName: string;
    lastName: string;
    isMarried: boolean;
} = {
    firstName: "Zahid",
    middleName: "Hasan",
    lastName: "Prince",
    isMarried: true,
    organization: "programming hero"
}


console.log(user);


