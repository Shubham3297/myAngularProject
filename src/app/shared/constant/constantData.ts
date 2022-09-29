// Regular Expression
export const RegName: string = "[a-zA-Z ]{3,30}";
export const RegPassword: string = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$";
export const RegEmail: string = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
export const RegContact: string = "([0-9]{10,12})";

// Subject Array
export const myCourses: string[] = ["Angular", "FullStack", "Python", "MEANStack", "MERNStack", "Other"];

// Array of object (service class)

export const students = [
    { id: 201, name: "Raju", address: "Pune", gender: "Male", grade: "A", contact: 88888 },
    { id: 202, name: "Varun", address: "Mumbai", gender: "Male", grade: "B+", contact: 99999 },
    { id: 203, name: "Kajal", address: "Nashik", gender: "Female", grade: "B+", contact: 77777 },
    { id: 204, name: "Shubham", address: "Pune", gender: "Male", grade: "A+", contact: 66666 },
    { id: 205, name: "Rani", address: "Thane", gender: "Female", grade: "A", contact: 44444 },
]

// Database url

export const DBURL: String = "http://localhost:3000";