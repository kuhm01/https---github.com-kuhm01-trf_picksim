import './App.css';
import Main from './components/Main/Main.js';
import Rightbar from './components/Rightbar/Rightbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <div className="App">
      <div>
        <Main></Main>
      </div>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div>
        <Rightbar></Rightbar>
      </div>
    </div>
  );
}

export default App;