import React from 'react';
import { useParams } from 'react-router-dom';

export default function Article() {

    const params = useParams()
    console.log(params);
    
    return (
        <div>
            <h1>Votre article</h1>
        </div>
    )
}