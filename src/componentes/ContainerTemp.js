import React from 'react';
import '../css/ContainerTemp.css';
import ContainerInfo from './ContainerInfo';

export default function ContainerTemp(props) {
    return (
        <div className="weather">
            <h2 className="weather__value">{props.Temp_c} ºC</h2>
            <span className="weather__legend">{props.Text}</span>
            {/* <p className="ContainerInfoSensa">Sensação térmica:</p>
            <p className="ContainerInfoVal">{props.Sensa}</p> */}
        </div>
    );
}
