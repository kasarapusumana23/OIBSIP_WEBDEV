function convertTemperature(){

    let temperature = document.getElementById("temperature").value;

    let unit = document.getElementById("unit").value;

    let result = document.getElementById("result");

    // VALIDATION

    if(temperature === ""){
        result.innerHTML = "Please enter a temperature!";
        return;
    }

    temperature = Number(temperature);

    // CONVERSION

    let convertedTemperature;

    if(unit === "celsius"){

        convertedTemperature = (temperature * 9/5) + 32;

        result.innerHTML =
            temperature + "°C = " +
            convertedTemperature.toFixed(2) + "°F";

    }

    else if(unit === "fahrenheit"){

        convertedTemperature = (temperature - 32) * 5/9;

        result.innerHTML =
            temperature + "°F = " +
            convertedTemperature.toFixed(2) + "°C";

    }

    else if(unit === "kelvin"){

        convertedTemperature = temperature + 273.15;

        result.innerHTML =
            temperature + "°C = " +
            convertedTemperature.toFixed(2) + "K";

    }
}