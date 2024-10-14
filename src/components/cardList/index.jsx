import React from "react";
import "./index.css"

const LegendList = ({ legends, onSelect, selectedLegendId }) => {
    return (
        <nav className="list">
            <ul>
                {legends.map((legend, index) => (
                    <li key={index}
                        className={`legend ${legend.id === selectedLegendId ? 'active' : ''}`}
                        onClick={() => onSelect(legend.id)}
                        id={legend.id}>
                            <img src={legend.imagem} alt={legend.nome} />
                            <span>{legend.nome}</span>
                        </li>
                ))}
            </ul>
        </nav>
    )
}

export default LegendList