import axios from "axios";

export  function getWeather() { 

   

    console.log('get success');
        axios.get("https://api.openweathermap.org/data/2.5/weather?zip=30303,us&appid=b31c36327031c1b5deccec684d68a47c&units=metric").then((response)=>
        {console.log(response.data.weather[0].description)
            let result=response.data.weather[0].description;
            return result;
        })
    // let response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=30303,us&appid=b31c36327031c1b5deccec684d68a47c&units=metric');
        // let result = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip=30303,us&appid=b31c36327031c1b5deccec684d68a47c&units=metric")
        // console.log(result.data.weather[0].description)
        // return result.data.weather[0].description;
    // console.log(response);
    // console.log(response.weather[0]);
    

}