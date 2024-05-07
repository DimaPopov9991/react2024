import React, {FC, useEffect, useState} from 'react';
import {IUserProps} from "./user";



const Users:FC<IUserProps> = () => {
    const [users, setUsers] = useState<IUserProps[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(({users}):void =>setUsers(users))
    }, []);



    console.log(users)
    return (
        <div>
            {users.map(({
                            id,
                            firstName,
                            lastName,
                            maidenName,
                            age,
                            gender,
                            image,
                            bloodGroup,
                            height,
                            weight,
                            eyeColor,
                            phone, birthDate,
                hair,
                username




                        }: any) => (
                <div> User ID:{id}
                    <ul>

                        <li>First name:{firstName}</li>
                        <li>Age:{age}</li>
                        <li>Last Name:{lastName}</li>
                        <li> Gender:{gender}</li>
                        <li>Blodroup:{bloodGroup}</li>
                        <li>height:{height}</li>
                        <li>weight:{weight}</li>
                        <li>First eyeColor:{eyeColor}</li>
                        <li>Phone:{phone}</li>
                        <li>BirthDate:{birthDate}</li>
                        <li> Hair type and collor:{hair.type} {hair.color}</li>
                        <li>Username:{username}</li>


                    </ul>
                    <div><img src={image} alt={maidenName}/></div>


                </div>))}







        </div>
    );
};

export default Users;