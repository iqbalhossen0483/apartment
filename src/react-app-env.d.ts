/// <reference types="react-scripts" />

interface Property{
    img: string;
    price: number;
    loaction: string;
    name: string;
    room: number;
    bed: number
    area: string;
}

interface userLogin{
    email: string;
    passwoard: string
}
interface userRegister extends userLogin{
    name: string;
}