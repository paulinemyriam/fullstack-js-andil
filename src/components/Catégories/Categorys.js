import React from 'react';
import Navbar from '../Navbar/Navbar';

class Categorys extends React.Component {
    render() {
        return (
            <div>
                <Navbar />

                <h1>Toutes les catégories</h1>

                <ul id='listCategory'>
                    <li className='categoryAll'>Débutant</li>
                    <li className='categoryAll'>Intérmédiaire</li>
                    <li className='categoryAll'>Avancé</li>
                    <li className='categoryAll'>Expert</li>
                </ul>

            </div>
        )
    }
}

export default Categorys;