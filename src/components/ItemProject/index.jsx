import React from "react";

import "./ItemProject.css";


function ItemProject (props) {
    // const {image, link, title} = props.projects;

    // if(!image || !link || !title){
    //     return <p>Carregando...</p>
    // }

    return (
        <div className="boxs-cards">
                <a href={props.link} target="_blank">
                    <img src={props.image} alt="img-card"/>
                    <p>{props.title}</p>
                </a>
            </div>
    );
}

export default ItemProject;