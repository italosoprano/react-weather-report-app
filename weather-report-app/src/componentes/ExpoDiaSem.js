import React from "react";
import '../css/ExpoDiaSem.css'
import Sol from '../componentes/sol.png'

export default function DiaDaSemana(){

    return(
        <div className="DiaSemanaVitrine">
            <h2>Dia</h2>
            <img src={Sol} className="imgDiaDaSemana"/>
            <p className="temperatura">28 graus</p>
        </div>
    )
}