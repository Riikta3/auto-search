import SearchBar from '../../containers/SearchBar';
import Results from '../../containers/Results';
import Counter from '../../containers/Counter';
import Product from '../../containers/Product'
import './App.scss';

export default function App({ visibility, resetState }) {
  return (
    <div className="app">
      <header onClick={resetState} className="app-header">
        <h1 className='app-header-title'>TROUVE TON BOLIDE</h1>
      </header>
      {
        visibility
          ?
          <Product />
          :
          <div>
            <SearchBar />
            <Counter />
            <Results />
          </div>
      }
      <footer className='app-footer'>
        <h1 onClick={resetState} className='app-footer-title'>TROUVE TON BOLIDE</h1>
        <p className="app-footer-copyright">
          Copyright 2021 | App créé par
          <a href="http://www.tarikklezo.fr/"> Tarik KLEZO</a>
        </p>
      </footer>
    </div>
  );
};
