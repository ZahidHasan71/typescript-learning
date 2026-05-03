// ? : ternary operator : declare  making

const biyeJonnoEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log("He is matured");
    // } else {
    //     console.log("He is not natured for married");
    // }

    const result = age >= 20 ? "He is matured" : "He is not natured for married";
    console.log(result);
}
biyeJonnoEligible(20);


// nullish coalescing

const userTheme = "Dark Theme";

const selectedTheme = userTheme ?? "light Theme";

console.log("The theme is ", selectedTheme);


const isAuthenticated = null;

const resultwithTernary = isAuthenticated ? isAuthenticated : "you age guest";

const resultWithNulish = isAuthenticated ?? "you age guest";
console.log(resultWithNulish);
