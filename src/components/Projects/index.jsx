import React from "react";

import "./Project.css";

import ItemProject from "../ItemProject";

function Projects ({projects}){

    return (
        <section id="project" className="section-project">

            <div className="titulos-page-conteudos">
                <h2 id="">Projetos</h2>
            </div>
                <div className="cards-container">
            
                    <div className="container-servicos">

                        {projects.map(
                            (item, index) => 
                                <ItemProject
                                key={index}
                                link={item.link}
                                image={item.image}
                                title={item.title}
                                />
                                
                            )}


                    </div>
                </div>    
        </section>
    );
}

export default Projects;