import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Certificate = () => {
    const certificate_data = useLoaderData()

    const {id,name,competition,division,certificate} =certificate_data
    return (
        <div>
            Certificate
            <p> সনদ নং :{id}</p>
            <p> নাম  : {name}</p>
            <p> প্রতিজগিতা :{competition}</p>
            <p>বিভাগ : {division}</p>
            <p>{certificate}</p>
        </div>
    );
};

export default Certificate;