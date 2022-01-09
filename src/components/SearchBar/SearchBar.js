import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.scss';

export default function SearchBar({ inputValue, onInputChange, onSearchSubmit }) {
    return (
        <div className="searchbar dark">
            <form className='searchbar-form' onSubmit={onSearchSubmit}>
                <input
                    type="text"
                    placeholder='Marque, modèle, catégorie...'
                    className='searchbar-input'
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button className="searchbar-btn" action="">
                    <FontAwesomeIcon
                        className='searbar-btn-icon'
                        icon={faSearch}
                    />
                </button>
            </form>
            {/* <li className='searchbar-list'>
                <ul className='searchbar-list-item'>
                    Catégorie & KM
                    <FontAwesomeIcon
                        className='searchbar-list-item_chevron'
                        icon={faChevronDown} />
                </ul>
                <ul className='searchbar-list-item'>
                    Marque
                    <FontAwesomeIcon
                        className='searchbar-list-item_chevron'
                        icon={faChevronDown} />
                </ul>
                <ul className='searchbar-list-item'>
                    Énergie
                    <FontAwesomeIcon
                        className='searchbar-list-item_chevron'
                        icon={faChevronDown} />
                </ul>
                <ul className='searchbar-list-item'>
                    Classe
                    <FontAwesomeIcon
                        className='searchbar-list-item_chevron'
                        icon={faChevronDown} />
                </ul>
                <ul className='searchbar-list-item'>
                    Année
                    <FontAwesomeIcon
                        className='searchbar-list-item_chevron'
                        icon={faChevronDown} />
                </ul>
            </li> */}
        </div>
    );
};
