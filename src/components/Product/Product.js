import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './Product.scss';

export default function Product({ car, resetState }) {
    return (
        <div className='product'>
            <FontAwesomeIcon
                className='product-icon'
                icon={faArrowCircleLeft}
                onClick={resetState}
            />
            <div className='product-main'>
                <div className='product-main-left'>
                    <img className='product-mail-left-img' src={car.img} alt={car.Nom} />
                </div>
                <div className='product-main-right'>
                    <div className='product-main-right-title'>
                        <p>Fiche Technique de</p>
                        <h2>{car.Nom}</h2>
                    </div>
                    <p className='product-main-right-subtitle'>Moteur: {car.Moteur}, {car.Energie}</p>
                </div>
            </div>
            {
                car.Hauteur || car.Longueur || car.Largeur
                    ?
                    <div className="product-size">
                        <div className="product-size-details">
                            <h3 className="product-size-details-title">Dimensions <span className='product-size-details-title_brand'>{car.Nom} {car.Moteur}</span></h3>
                            <p>Longueur: {car.Longueur}</p>
                            <p>Hauteur:{car.Hauteur}</p>
                            <p>Largeur: {car.Largeur}</p>
                        </div>
                    </div>
                    :
                    ''
            }
            <div className="product-infos">
                <h2 className="product-infos-title">Informations Générales</h2>
                <div className='product-infos-detail'>
                    <p className="product-infos-detail-item">
                        Type: {car.Classe}
                    </p>
                    <p className="product-infos-detail-item">
                        Carrosserie: {car.Carrosserie}
                    </p>
                    <p className="product-infos-detail-item">
                        Poids: {car.Poids}
                    </p>
                    <p className="product-infos-detail-item">
                        Consommation: {car.Consommation}
                    </p>
                    <p className="product-infos-detail-item">
                        Transmission: {car.Transmission}
                    </p>
                    <p className="product-infos-detail-item">
                        Boite de vitesses: {car['Boite de vitesse']}
                    </p>
                    <p className="product-infos-detail-item">
                        Accélération: {car.Accélération}
                    </p>
                    <p className="product-infos-detail-item">
                        Vitesse maximale: {car['Vitesse maximale']}
                    </p>
                    <p className="product-infos-detail-item">
                        Couple maximal: {car['Couple Maximal']}
                    </p>
                    <p className="product-infos-detail-item">
                        Emissions de CO2: {car['Emissions de CO2']}
                    </p>

                    <p className="product-infos-detail-item">
                        Position du moteur: {car['Position du moteur']}
                    </p>
                    <p className="product-infos-detail-item">
                        Puissance maximale: {car['Puissance maximale']}
                    </p>
                    <p className="product-infos-detail-item">
                        Usine d'assemblage: {car["Usine d'assemblage"]}
                    </p>
                    <p className="product-infos-detail-item">
                        Années de Production: {car['Années de production']}
                    </p>
                    <p className="product-infos-detail">

                    </p>
                </div>
            </div>
        </div>
    )
}