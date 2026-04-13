async function getWeather(){
    const input=document.getElementById('inputCity').value.toLowerCase();
    const apiKey="3204a92958f9c35a1e983a02331f6f70";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    try{
        const response=await fetch(url);
        const data =await response.json();
        console.log(data);

        const temp = data.main.temp;
        const weather = data.weather[0].description;

        document.getElementById('head').textContent=input;
        document.getElementById('temp').textContent=temp+"°c";
        document.getElementById('weather').textContent=weather;
    }
    catch(error){
        console.error(error)
    }
}