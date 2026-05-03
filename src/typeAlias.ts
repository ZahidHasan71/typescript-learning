type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    }
    gender: 'male' | 'female'
}

const user1: User = {
    id: 123,
    name: {
        firstName: 'Zahid',
        lastName: 'Hasan'
    },
    gender: 'male'
}
const user2: User = {
    id: 124,
    name: {
        firstName: 'Zahid',
        lastName: 'Hasan'
    },
    gender: 'male'
}

console.log(user1);