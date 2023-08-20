import React from "react";
import '../css/ContainerTemp.css'

export default function ContainerTemp(props){

    return (
        <div className="ContainerTemp">
            <h2 className="TempCidade">{props.Temp_c} ºC</h2>
            <p className="TextCidade">{props.Text}</p>
        </div>
    )
}