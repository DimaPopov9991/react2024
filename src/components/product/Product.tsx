import React, {FC} from 'react';
 export interface IProduct {

        "id": number
        "title": string
        "description": string[]
        "price": number
        "discountPercentage": number
        "rating": number
        "stock": number
        "brand": string
        "category": string
        "thumbnail": string
        "images": string}




const Product: FC<IProduct> = ({
                                   id,
                                   title,
                                   description,
                                   price,
                                   discountPercentage,
                                   rating,
                                   stock,
                                   brand,
                                   category,
                                   thumbnail,
                                   images
                               }) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                <li>{id}</li>
                <li>{description}</li>
                <li>{price}</li>
                <li>{discountPercentage}</li>
                <li>{rating}</li>
                <li>{stock}</li>
                <li>{brand}</li>
                <li>{category}</li>
                <li>{thumbnail}</li>

            </ul>
            <img src={images} alt={title}/>
        </div>
    );
};

export default Product;