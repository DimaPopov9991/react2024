import React, {FC, useEffect, useState} from 'react';
import {IUserProps} from "./user";



const Users:FC<IUserProps> = () => {
    const [users, setUsers] = useState<IUserProps[]>([])
    // useEffect()


    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(({users}):void =>setUsers(users))
    console.log(users)
    return (
        <div>
            {users.map(({id, firstName, lastName, maidenName, age, gender, image, bloodGroup}: IUserProps) => (
                <div>{id},{firstName},{lastName} <div> <img src={image} alt={maidenName}/></div></div>))}



        </div>
    );
};

export default Users;