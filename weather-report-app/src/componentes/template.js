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
                <div className='ContainerTemp'>
                    <h2 className='TempCidade'>37 ºC</h2>
                    <p>Min: 32 ºC, Max: 39ºC</p>
                </div>
                <div className='ContainerDiaLocal'>
                    <h2>{cidade} Manaus</h2>
                    <p>Domingo, 28</p>
                </div>
                <div className='ContainerImg'>
                    <img srcSet={Sol}/>
                    <p>Céu nublado, com chuva.</p>
                    <p className='Bold'><bold>Sensação térmica: </bold></p>
                    <p>9 bilhões de ºC</p>
                </div>
            </div>
            

        </div>
    )
}

/*
    {
                weatherForecast ? (
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
                            <div className='ContainerTemp'>
                                <h2 className='TempCidade'>{weatherForecast.current.temp_c} ºC</h2>
                                <p>Min: 32 ºC, Max: 39ºC</p>
                            </div>
                            <div className='ContainerDiaLocal'>
                                <h2>{weatherForecast.current.name}</h2>
                                <p>Domingo, 28</p>
                            </div>
                            <div className='ContainerImg'>
                                <img srcSet={Sol}/>
                                <p>Céu nublado, com chuva.</p>
                                <p className='Bold'><bold>Sensação térmica: </bold></p>
                                <p>9 bilhões de ºC</p>
                            </div>
                        </div>
                    </div>
                ):null
            }
*/