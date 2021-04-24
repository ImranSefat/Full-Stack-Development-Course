import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import { GlobalStyle } from './Styles/GlobalbStyle';



function App() {
  return (
    <div >
      <GlobalStyle />
      <header>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </header>
    </div>
  );
}

export default App;
