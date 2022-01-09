import './Result.scss';

export default function Result({
    brand,
    pictures,
    motor,
    power,
    energy,
    desc,
    getId,
    dataIndex
}) {
    return (
        <div onClick={getId} data-index={dataIndex} className="result">
            <img src={pictures} alt={brand} className="result-pictures" />
            <h3 className="result-brand">{brand}</h3>
            <p className="result-motor">{motor}</p>
            <p className="result-energy">{energy}</p>
            <p className="result-power">{power}</p>
            <p className="result-desc">{desc}</p>
            <a href="/" className='result-link'><button className="result-link-btn">Voir plus</button></a>
        </div>
    );
};
