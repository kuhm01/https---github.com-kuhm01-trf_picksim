import logo from './logo.svg';
import './App.css';
import useStore from './store/store.js'

function App() {

  const { count, increaseCount, removeCount } = useStore(state => state);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <button onClick={increaseCount}>increase</button>
        <button onClick={removeCount}>remove</button>
      </header>
    </div>
  );
}

export default App;
