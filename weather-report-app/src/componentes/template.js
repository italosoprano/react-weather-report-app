import React, {useState} from 'react'
import '../css/template.css'
import DiaSemana from '../componentes/ExpoDiaSem'
import Sol from '../componentes/sol.png'


export default function Pesquisa() {

    const [cidade, setCidade]=useState('')
    const [weatherForecast, setWeatherForecast]=useState(null)

    const handleChange = (e) =>{
        setCidade(e.target.value)
    }

    const handleSearch = () =>{
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=1cc0abe572ee47eca0a04826231008&q=${cidade}&lang=pt`)
        .then((res)=>{
            if(res.status == 200){
                return res.json()
            }
        })
        .then((data)=>{
            setWeatherForecast(data)
            console.log(weatherForecast)
        })
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
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
            
            <div className='VitrineDoTempo'>
                <div className='ContainerDiaLocal'>
                    <h2>Domingo, 28</h2>
                    <p>{cidade} Manaus</p>
                </div>
                <div className='ContainerImg'>
                    <img srcSet={Sol}/>
                    <p>Céu nublado, com chuva.</p>
                </div>
                <div className='ContainerTemp'>
                    <h2 className='TempCidade'>37 graus</h2>
                    <p>Sensação térmica: <br/> 9 bilhões de graus</p>
                </div>
            </div>

            {
                weatherForecast ? (
                    <div>
                        Olá
                    </div>
                ):null
            }
        </div>
    )
}

/*
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
*/