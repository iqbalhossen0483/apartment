/// <reference types="react-scripts" />

interface Property{
    _id: string
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

interface DbUser{
    _id?: string;
    displayName: string | null;
    email: string | null;
    role: string;
    phone?: number;
    currentAddress?: string;
    permanentAddress?: string;
}

interface userLogin{
    name: string;
    email: string;
    passwoard: string
}

interface Order{
    _id?: string;
    email: string;
    product: Property;
    number: number;
    currentAddress: string;
    permanentAddress: string;
    status: string;
}