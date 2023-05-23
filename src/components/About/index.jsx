import React from "react";

import "./About.css";

function About(props) {
    const {resumo, experienciaAcademica, experienciaProfissional} = props.about;

    if(!resumo || !experienciaAcademica || !experienciaProfissional){
        return <p>Carregando...</p>
    }
    
    return (
        <section id="sobre" className="conteudo-curriculo">
            <div className="titulos-page-conteudos">
            <h2 id="sobre-mim">Sobre mim</h2>
            </div>

                <div className="container-curriculo">
                    <div className="conteudo-sobremim">
                        <p className="text-conteudo-curriculo">{resumo}</p>
                        
                    </div>
                </div>
        </section>
    )
}

export default About;