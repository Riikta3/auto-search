import React from 'react';
import Result from './Result/Result'
import './Results.scss';

export default function Results({ cars, getCarKey }) {
    const excerptStr = (str) => {
        if (str.length > 300) {
            str = str.substring(0, 300) + '...';
        }
        return str
    };
    return (
        <div className="results">
            {
                cars.map((car, index) => {
                    return <Result
                        getId={getCarKey}
                        dataIndex={index}
                        key={index}
                        pictures={car.img}
                        brand={car.Nom}
                        motor={car.Moteur}
                        power={car['Puissance maximale']}
                        energy={car.Energie}
                        desc={excerptStr(car.Description)}
                    />
                })
            }
            {
                cars.length === 0 ? <p>Aucun résultat</p> : null
            }
        </div>
    );
};
