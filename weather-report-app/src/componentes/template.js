import React, {useState, useEffect} from 'react'
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
    
    function diaSemana() {
            const dia = new Date()
            const diaSem = dia.getDay()
            const diaSem2 = {
                1:'Domingo',
                2:'Segunda',
                3:'Terça-Feira',
                4:'Quarta-Feira',
                5:'Quinta-Feira',
                6:'Sexta-Feira',
                7:'Sabádo',
            }
            return diaSem2[dia.getDay()]
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
                    <h2>Cidade</h2>
                    <p>{diaSemana()}, {new Date().getDate()}</p>
                </div>
                <div className='ContainerImg'>
                    <img srcSet={Sol}/>
                </div>
                <div className='ContainerTemp'>
                    <h2 className='TempCidade'>37 ºC</h2>
                    <p>Céu nublado, com chuva.</p>
                </div>
                <div className='ContainerInfo'>
                    <p className='Bold ContainerInfoSensa'>Sensação térmica: </p>
                    <p className='ContainerInfoVal'>9 bilhões de ºC</p>
                </div>
            </div>
            

        </div>
    )
}

/*
    {weatherForecast ? (
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
                    <h2>Cidade</h2>
                    <p>{diaSemana()}, {new Date().getDate()}</p>
                </div>
                <div className='ContainerImg'>
                    <img srcSet={Sol}/>
                </div>
                <div className='ContainerTemp'>
                    <h2 className='TempCidade'>37 ºC</h2>
                    <p>Céu nublado, com chuva.</p>
                </div>
                <div className='ContainerInfo'>
                    <p className='Bold ContainerInfoSensa'>Sensação térmica: </p>
                    <p className='ContainerInfoVal'>9 bilhões de ºC</p>
                </div>
            </div>
            

        </div>
    ):null}
*/