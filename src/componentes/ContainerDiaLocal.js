import React from 'react';
import '../css/ContainerDiaLocal.css';

export default function ContainerDiaLocal(props) {
    function diaSemana() {
        const dia = new Date();
        const diaSem = {
            0: 'Domingo',
            1: 'Segunda-feira',
            2: 'Terça-feira',
            3: 'Quarta-feira',
            4: 'Quinta-feira',
            5: 'Sexta-feira',
            6: 'Sabádo',
        };

        return diaSem[dia.getDay()];
    }

    return (
        <div className="date-local">
            <span className="date-local__heading">{props.Cidade}</span>
            <span className="date-local__text">
                {diaSemana()}, {new Date().getDate()}
            </span>
        </div>
    );
}
