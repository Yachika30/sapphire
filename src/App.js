import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import {BrowseRouter, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Signup/>
    </BrowserRouter>
  );
}

export default App;
