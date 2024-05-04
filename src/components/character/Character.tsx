import React, {FC} from 'react';
interface IProps {
    name:string
    image:string
    children?: React.ReactNode

}
const Character:FC<IProps> = ({name,image, children}) => {
    return (
        <div>
            <div><h1>{name}</h1>
            </div>
            <div><img src={image} alt={name}/></div>
            <p>{children}</p>
        </div>
    );
};

export default Character;