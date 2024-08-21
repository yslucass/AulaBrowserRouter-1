import {Link} from "react-router-dom";
export default function Header(){
    return(
        <header>
            <Link to="/">
            <img src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" alt="Logo" className="logo"/>
            </Link>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/produto">
                <li>Produtos</li>
            </Link>
            <Link to="/oferta">
                <li>Ofertas</li>
            </Link>
        </header>
    );
}