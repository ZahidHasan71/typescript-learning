//constraint : strict rules

const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        ...studentInfo
    };
}

const student1 = {
    id: 123,
    name: "Hasan",
    hesPen: true
};
const student2 = {
    id: 231,
    name: 'prince',
    hasCar: true,
    isMarried: true
}

const result = addStudentToCourse(student2);
console.log(result);
