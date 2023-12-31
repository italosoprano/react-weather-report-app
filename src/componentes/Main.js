import React, { useState } from 'react';
import '../css/template.css';
import Sol from './sol.png';
import ContainerDiaLocal from './ContainerDiaLocal';
import ContainerImg from './ContainerImg';
import ContainerTemp from './ContainerTemp';

export default function Main() {
    const [cidade, setCidade] = useState('');
    const [weatherForecast, setWeatherForecast] = useState(null);

    const handleChange = (e) => {
        setCidade(e.target.value);
    };

    const handleSearch = () => {
        fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=1cc0abe572ee47eca0a04826231008&q=${cidade}&lang=pt`,
        )
            .then((res) => {
                if (res.status == 200) {
                    return res.json();
                }
            })
            .then((data) => {
                setWeatherForecast(data);
                console.log(weatherForecast);
            });
    };

    return (
        <div className="Main">
            <div className="CaixaDePesquisa">
                <form>
                    <input
                        type="text"
                        className="InputNameCity"
                        placeholder="Digite uma cidade"
                        value={cidade}
                        onChange={handleChange}
                    />
                </form>
                <button onClick={handleSearch}>Pesquisar</button>
            </div>

            <div className="VitrineDoTempo">
                <ContainerDiaLocal
                    Cidade={weatherForecast ? weatherForecast.location.name : 'Manaus'}
                />
                <ContainerImg
                    Src={weatherForecast ? weatherForecast.current.condition.icon : Sol}
                />
                <ContainerTemp
                    Temp_c={weatherForecast ? weatherForecast.current.temp_c : '37'}
                    Text={
                        weatherForecast
                            ? weatherForecast.current.condition.text
                            : 'Céu nublado, com chuva.'
                    }
                    Sensa={
                        weatherForecast
                            ? weatherForecast.current.feelslike_c + 'ºC'
                            : '9 bilhões de ºC'
                    }
                />
            </div>
        </div>
    );
}
