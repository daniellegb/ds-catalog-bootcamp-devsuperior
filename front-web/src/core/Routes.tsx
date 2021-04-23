import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from '../pages/Admin';
import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import Navbar from './components/Navbar';

const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/" exact>
                    <Home />
            </Route>
            <Route path="/catalog">
                    <Catalog />
            </Route>
            <Route path="/admin">
                    <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;