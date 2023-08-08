import React from 'react'
import '../css/template.css'
import DiaSemana from '../componentes/ExpoDiaSem'
import Sol from '../componentes/sol.png'


export default function pesquisa() {

    return(
        <div className='Main'>
            <div className='CaixaDePesquisa'>
                <form>
                    <input type='text' className='InputNameCity' placeholder='Digite uma cidade'/>
                    <button>Pesquisar</button>
                </form>
            </div>
            

            <div className='VitrineDoTempo'>
                <div className='ExpositorPrincipal'>
                    <div className='ContainerImg'>
                        <img srcSet={Sol}/>
                    </div>
                    <div className='ContainerDados'>
                        <p className='DiaDeHoje'>Hoje :</p>
                        <h2 className='NomeCidade'>Pindamonhangaba</h2>
                        <p className='Temperatura do Dia'>Temperatura :</p>
                        <p className='TipoDeCeu'>Céu claro</p>
                    </div>
                </div>
                <div className='ContainerDiaSemana'>
                    <DiaSemana/>
                    <DiaSemana/>
                    <DiaSemana/>
                </div>
            </div>
        </div>
    )
}