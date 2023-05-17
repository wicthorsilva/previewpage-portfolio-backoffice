import React from "react";

import {Link} from "react-router-dom";

function NavbarMenu () {
    return (
            <nav className="nav-bar">
                <ul className="list-nav-bar">
                    <li className="li-nav-bar"><Link to="/">Sobre</Link></li>
                    <li className="li-nav-bar"><Link to="/projects">Projetos</Link></li>
                    <li className="li-nav-bar"><Link to="/contact">Contatos</Link></li>
                </ul>
            </nav>
    );
}

export default NavbarMenu;