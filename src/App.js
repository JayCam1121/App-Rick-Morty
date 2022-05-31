import './App.css';
import Content from './components/Content';
import {useState} from 'react';
import SearchBox from './components/SearchBox';


function App() {

  const [location, setLocation] = useState({})
  const [id, setId] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty WIKI</h1>
      </header>
      <main>
        <SearchBox setLocation={setLocation} setId={setId} id={id}/>
        <Content location={location} setLocation={setLocation}/>
      </main>
    </div>
  );
}

export default App;
