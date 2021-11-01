import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import SearchPage from './pages/search-page/SearchPage';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () => {
    return (
        <div className="App">
            <Router>

                <Header/>

                <Switch>
                    <Route path="/search">
                        <SearchPage/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>

                <Footer/>

            </Router>
        </div>
    );
}

export default App;
