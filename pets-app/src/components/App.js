import logo from '../logo.svg';
import '../App.css';

import Header from "./Header";
import PetList from './PetList';

function App() {
  return (
    <div className="app">
      <Header/>
      <PetList/>
    </div>
  );
}

export default App;
