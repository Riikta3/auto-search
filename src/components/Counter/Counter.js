import './Counter.scss';

export default function Counter({ cars, sortCars, displaySort, value }) {
    return (
        <div className="counter">
            <h3 className="counter-text">{cars.length} voitures</h3>
            <form action="" onSubmit={displaySort}>
                <select onChange={sortCars} name="sort">
                    <option value="Default">Trier les resultats</option>
                    <option value="Années de production">Année de production</option>
                    <option value="Marque">Marque</option>
                    <option value="Energie">Energie</option>
                    <option value="Classe">Classe</option>
                    <option value="Poids">Poids</option>
                </select>
                <button className='counter-btn' action="">Valider</button>
            </form>
        </div>
    );
};
