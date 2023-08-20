import React from "react";
import '../css/ContainerImg.css'

export default function ContainerImg(props){

    return (
        <div className="ContainerImg">
            <img srcSet={props.Src}/>
        </div>
    )
}