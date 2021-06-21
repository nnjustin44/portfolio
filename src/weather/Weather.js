import React, { Component } from "react";

class Weather extends Component{
    constructor(props){
        super(props);
        this.state={data:null};
    }

    componentDidMount(){
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=30303,us&appid=b31c36327031c1b5deccec684d68a47c&units=metric')
        .then(response => {
            console.log(response);
            if (response.status !== 200) {
                console.log("Server Error");
            }
            return response.json();
        })
        .then(data => {
            this.setState({data: data});
        });
    }

    render(){
        return(<div>
            {/* {this.state.data.weather[0].description} */}
        </div>);
    }
}

export default Weather;