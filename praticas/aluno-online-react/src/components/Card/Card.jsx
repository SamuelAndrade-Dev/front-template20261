import React from "react";
import "./Card.css";

function Card (props) {
    return(
        <article className="card-informativo">
            <header>
                <h3>{props.titulo}</h3>
            </header>
                <ul>
                    {props.conteudo.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
        </article>
    )
}

export default Card;