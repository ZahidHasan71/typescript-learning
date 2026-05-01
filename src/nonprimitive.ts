// Non primitive data type

let bazarList = ["milk", "sugar", "salt"];
bazarList.push("butter");
console.log(bazarList);

let mixBazar: (string | number)[] = ["milk", 5, "egg", 10, "Banana", 20];

mixBazar.push(12);
mixBazar.push("Chicken")

// tuple

let personInfo: [string, string, number] = ['prince', 'bangladesh', 24]