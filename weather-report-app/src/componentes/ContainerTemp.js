import React from "react";
import '../css/ContainerTemp.css'
import ContainerInfo from '../componentes/ContainerInfo'

export default function ContainerTemp(props){

    return (
        <div className="ContainerTemp">
            <h2 className="TempCidade">{props.Temp_c} ºC</h2>
            <p className="TextCidade">{props.Text}</p>
            <p className="ContainerInfoSensa">Sensação térmica:</p>
            <p className="ContainerInfoVal">{props.Sensa}</p>
        </div>
    )
}