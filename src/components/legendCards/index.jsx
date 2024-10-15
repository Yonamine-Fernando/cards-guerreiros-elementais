import React from "react";
import './index.css'

function LegendCard({ nome, imagem, elemento, numero, descricao, tipo }) {
    return (
        <div className={`card-legend type-${elemento.toLowerCase()}`}>
            <div className="card-top">
                <div className="detales">
                    <h2 className="name">{nome}</h2>
                    <h3 className="tipo">{tipo}</h3>
                    <span>{numero}</span>
                </div>
                <span className="type">{elemento}</span>
                <div className="card-img">
                    <img src={imagem} alt={nome} />
                </div>
            </div>
            <dir className="card-informations">
                <div className="description"></div>
                <h3>Descrição</h3>
                <p>{descricao}</p>
            </dir>
        </div>
    )
}

export default LegendCard