import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "./Product";


const [items, setItems] = useState<IProduct[]>([])

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(({products}):void =>setItems(products))
console.log(items)

const Products = () => {
    return (
        <>

        </>
    );
};

export default Products;