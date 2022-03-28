import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import ClientList from './pages/ClientList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/register-client" component={ RegisterPage } />
          <Route path="/clients" component={ ClientList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
