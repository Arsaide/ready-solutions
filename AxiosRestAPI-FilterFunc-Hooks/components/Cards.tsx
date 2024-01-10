'use client'
import React, {useEffect, useState} from 'react';
import {fetchData} from 'API';
import {Card} from "PROPS";
import useData from "HOOK";

const Cards = () => {
    const { products } = useData() // HOOK

    return (
        <>
            {products.map(item => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    images={item.images}/>
            ))}
        </>
    );
};

export default Cards;
