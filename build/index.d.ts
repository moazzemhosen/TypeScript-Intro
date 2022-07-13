declare let first_name: string;
declare let y: number;
declare let isDone: boolean;
declare let arr1: number[];
declare let arrayOfStrings: string[];
declare let tuple: [string, number, number?];
declare enum Color {
    User = 0,
    SuperUser = 1,
    Admin = 2,
    SuperAdmin = 3
}
declare let greenColor: Color;
declare function sum(a: number, b: number): number;
declare function multiply(a: number, b: number): number;
declare function greeter(fn: (a: string) => void): void;
declare type person = {
    title: string;
    status: boolean;
    id: number;
};
declare const masai: person;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    prefix?: number;
    phones: [number, number, number];
    address: [Address, Address];
    email?: string;
    firstname?: number;
    lasename?: string;
}
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
declare function useroradmin(): void;
