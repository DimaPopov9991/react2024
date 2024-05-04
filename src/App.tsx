import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from "./components/character/Character";
import Charecters from "./components/character/Charecters";
import User, {IUserProps} from "./components/user/user";
import Users from "./components/user/users";


const App:FC<IUserProps> = () => {
    return (
        <>


            {/*<Charecters/>*/}
            <Users></Users>



        </>
    );
};

export default App;
