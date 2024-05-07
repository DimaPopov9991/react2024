import React, {FC} from 'react';

export interface IUserProps {
    "id"?: number
    "firstName"?: string
    "lastName"?: string
    "maidenName"?: string
    "age"?: number
    "gender"?: string
    "email"?: string
    "phone"?: number
    "username"?: string
    "password"?: string
    "birthDate"?: string
    "image"?: string
    "bloodGroup"?: string
    "height"?: number
    "weight"?: number
    "eyeColor"?: string
    "hair"?: object
    "domain"?: string
    "ip"?: number
    "address"?: object
    "city"?: string
    "coordinates"?: object
    "postalCode"?: string
    "state"?: string

    "macAddress"?: string
    "university"?: string
    "bank"?: string
    children?: React.ReactNode



}
const User:FC<IUserProps> = ({id,firstName,lastName,maidenName,age,gender,image,bloodGroup,children}) => {
    return (
        <div>
            <div>{id},{firstName},{lastName},{maidenName},{age
            }, {gender},{image},{bloodGroup}</div>

        </div>
    );
};

export default User;