import logo from './logo.svg';
import './App.css';
import concat from 'lodash/concat';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React {concat([1], 2, [3], [[4]]).join(', ')}
        </a>
      </header>
    </div>
  );
}

export default App;
