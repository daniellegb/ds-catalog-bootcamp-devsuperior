import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from '../pages/Admin';
import Catalog from '../pages/Catalog';
import ProductDetails from '../pages/Catalog/components/ProductDetails';
import Home from '../pages/Home';
import Navbar from './components/Navbar';

const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/" exact>
                    <Home />
            </Route>
            <Route path="/products" exact>
                    <Catalog />
            </Route>
            <Route path="/products/:productId">
                    <ProductDetails />
            </Route>
            <Route path="/admin">
                    <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;