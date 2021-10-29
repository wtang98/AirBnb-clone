import './App.scss';
import Home from './pages/home/home';
import Header from './components/header/header'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
