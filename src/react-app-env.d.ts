/// <reference types="react-scripts" />

interface Property{
    name: string;
    price: number;
    location: string;
    room: number;
    bed: number
    area: string;
    description: string;
    img?: ArrayLike<FileList[0]>;
    imgUrl?: string;
    imgId?: string;
}

interface userLogin{
    name: string;
    email: string;
    passwoard: string
}