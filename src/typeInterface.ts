type User = {
    name: string,
    age: number,
};

type Role = {
    role: "admin" | 'user';
}

type UserWithRole = User & Role;

const user1: UserWithRole = {
    name: "Hasan",
    age: 20,
    role: "admin",
};
const user2: User = {
    name: "prince",
    age: 25
}

console.log(user1);