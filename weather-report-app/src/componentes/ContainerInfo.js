import React from "react";
import '../css/ContainerInfo.css'

export default function ContainerInfo(props){

    return (
        <div className="ContainerInfo">
            <p className="ContainerInfoSensa">Sensação térmica:</p>
            <p className="ContainerInfoVal">{props.Sensa}</p>
        </div>
    )
}