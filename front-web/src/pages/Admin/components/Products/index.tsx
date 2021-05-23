import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const Products = () => {
    return (
        <>
            {/* <Link to="/admin/products" className="mr-5">
                Listar produtos
            </Link>
            <Link to="/admin/products/create" className="mr-5">
                Criar produtos
            </Link>
            <Link to="/admin/products/10" className="mr-5">
                Editar produtos
            </Link> */}
            <Switch>
                <Route path="/admin/products" exact>
                    <List />
                </Route>
                <Route path="/admin/products/create" >
                    <Form />
                </Route>
                <Route path="/admin/products/:productId" >
                    <h1>Edita usuário</h1>
                </Route>
            </Switch>
        </>
    );

}

export default Products;