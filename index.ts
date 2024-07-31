let num: Number = 10;
let str: string = "John";

const arrNum: Number[] = [1, 2, 3, 4, 5];

// Cara buat object
interface IUser {
  name: string;
  email: string;
  age?: number; // pakai tanda tanya (?) buat option optional, boleh di isi atau enggak
}

const user1: IUser = {
  name: "John",
  email: "john@gmail.com",
  age: 20,
};


function sum(a: number, b: number): number { // bisa pake void, untuk gk return apa"
    return a + b
}

sum (10, 5)

