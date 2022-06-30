import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import App from '../../App';

export default function Article() {

    const params = useParams()
    console.log(params);
    
    return (
        <div>
            <Navbar />
            <h1 id=''>Votre titre</h1>
        </div>
    )
}