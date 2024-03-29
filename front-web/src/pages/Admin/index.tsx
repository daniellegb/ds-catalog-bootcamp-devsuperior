import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Form from "./components/Products/Form";
import './styles.scss';

const Admin = () => (
    <div className="admin-container">
        <Navbar />
        <div className="admin-content">
            <Switch>
                <Route path="/admin/products" >
                    <Products />
                </Route>
                <Route path="/admin/categories" >
                    <Form />
                </Route>
                <Route path="/admin/users" >
                    <h1> Users </h1>
                </Route>
            </Switch>
        </div>
    </div>
);

export default Admin;