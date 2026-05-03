
// destructuring object
const user = {
    id: 123,
    gender: "male",
    name: {
        firstName: "Zahid",
        lastName: "Hasan",
    },
    favouriteColor: "red & blue",
}

const { favouriteColor: myFavouriteColor } = user;
console.log(myFavouriteColor);

//Array Destructuring
const bazarList = ["milk", "sugar", "salt"];
const [a, b, c] = bazarList;
console.log(c);