
const key = "384f2d470f491cbca9d3c2a1e7ff7816"

function Dadostela(dados){
    document.querySelector('.titulo-cidade').innerHTML = "Tempo em " +  dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.umidade').innerHTML = "Umidade relativa do ar : " + dados.main.humidity + "C°"
}

async function Buscardados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric `).then(Response => Response.json());
    Dadostela(dados)
}



function Cliquebotao(){
    const cidade = document.querySelector('.input-cidade').value
    Buscardados(cidade)

}


