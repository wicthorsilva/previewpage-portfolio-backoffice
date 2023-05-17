import React from "react";

import "./Header.css";

import imgWicthor from "../../assets/img/img_wicthor-portfolio.png";

function Header(props) {

    const {nome, cargo, foto} = props.informacoes;

    return (
        <header>
      <div className="header-principal">
          

                <div className="header-my-name_my-img">
                        <div className="my-name_my-img" id="titulo-page-myname">
                            <h1 id="my-name">{nome}</h1>
                            <h4 id="eventoSubtitulo">{cargo}</h4>
                        </div>

                        <div id="my-img">
                            <img src={imgWicthor} alt="Imagem-Wicthor"/>
                        </div>
            </div>
      </div>
    </header>
    )
}

export default Header;