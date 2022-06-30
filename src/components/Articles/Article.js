import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Article() {

    const params = useParams()
    console.log(params);
    
    return (
        <div>
            <Navbar />
            <h1>Votre article</h1>
        </div>
    )
}