import React, {useState} from 'react'
import '../css/template.css'
import DiaSemana from '../componentes/ExpoDiaSem'
import Sol from '../componentes/sol.png'


export default function Pesquisa() {

    const [cidade, setCidade]=useState('')

    const handleChange = (e) =>{
        setCidade(e.target.value)
    }

    return(
        <div className='Main'>
            <div className='CaixaDePesquisa'>
                <form>
                    <input 
                    type='text' 
                    className='InputNameCity' 
                    placeholder='Digite uma cidade' 
                    value={cidade}
                    onChange={handleChange}
                    />
                </form>
            </div>
            

            <div className='VitrineDoTempo'>
                <div className='ExpositorPrincipal'>
                    <div className='ContainerDiaLocal'>
                        <h2>Domingo, 28</h2>
                        <p>Manaus, AM</p>
                    </div>
                    <div className='ContainerImg'>
                        <img srcSet={Sol}/>
                    </div>
                    <div className='ContainerTemp'>
                        <h2 className='TempCidade'>37 graus</h2>
                    </div>
                </div>
                <div className='ContainerDiaSemana'>
                    <h2 className='DiaSemanaTitulo'>Proximos 7 dias...</h2>
                    <DiaSemana/>
                    <DiaSemana/>
                    <DiaSemana/>
                    <DiaSemana/>
                    <DiaSemana/>
                    <DiaSemana/>
                    <DiaSemana/>
                </div>
            </div>
        </div>
    )
}