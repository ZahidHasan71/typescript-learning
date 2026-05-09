//key of operator it's works on type

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle1 = "car";

const user: User = {
    name: "Hasan",
    id: 24,
    address: {
        city: "Dhaka"
    }
}
type User = {
    name: string,
    id: number,
    address: object,
}

// const myId = user.id;
// const myName = user.name;
// const myAddress = user.address;

// const myId = user["id"];
// const myName = user["name"];
// const myAddress = user["address"];

// console.log({ myId, myName });

const getPropertyFromObj = (obj: User, key: keyof User) => {
    return obj[key];
}

const result = getPropertyFromObj(user, "name");
console.log(result);