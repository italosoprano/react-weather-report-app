import React from "react";
import '../css/ContainerDiaLocal.css'

export default function ContainerDiaLocal(props){

    function diaSemana() {
        const dia = new Date()
        const diaSem = {
            1: 'Domingo',
            2: 'Segunda-feira',
            3: 'Terça-feira',
            4: 'Quarta-feira',
            5: 'Quinta-feira',
            6: 'Sexta-feira',
        }

        return diaSem[dia.getDay()]
    }

    return (
        <div className="ContainerDiaLocal">
            <h2>{props.Cidade}</h2>
            <p>{diaSemana()}, {new Date().getDate()}</p>
        </div>
    )
}