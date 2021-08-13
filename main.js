var airTemperature = document.getElementById("air_temperature");

var app = new Vue({
    el: '#weather-form',
    data: {
        sliderFormTag: false
    },
    el: '#weather-display',
    data: {
        myWeather: 'Sucks',
        yourWeather: 'Sucks too',
        image: 'https://worldweather.wmo.int/images/10.png',
        theFlag: true,
        temperature: airTemperature,
        weatherList: [ //https://worldweather.wmo.int/en/wxicons.html
            { weatherID: 2, weatherIconPath: "https://worldweather.wmo.int/images/2.png", weatherValue: "storm", weatherName: "Thunderstorms, Thundershowers, Storm, Lightning" },
            { weatherID: 3, weatherIconPath: "https://worldweather.wmo.int/images/3.png", weatherValue: "hail", weatherName: "Hail" },
            { weatherID: 4, weatherIconPath: "https://worldweather.wmo.int/images/4.png", weatherValue: "snowstorm", weatherName: "Blowing Snow, Blizzard, Snowdrift, Snowstorm" },
            { weatherID: 5, weatherIconPath: "https://worldweather.wmo.int/images/5.png", weatherValue: "snowshowers", weatherName: "Snow Showers, Flurries" },
            { weatherID: 6, weatherIconPath: "https://worldweather.wmo.int/images/6.png", weatherValue: "snow", weatherName: "Snow, Heavy Snow, Snowfall" },
            { weatherID: 7, weatherIconPath: "https://worldweather.wmo.int/images/7.png", weatherValue: "lightsnow", weatherName: "Light Snow" },
            { weatherID: 8, weatherIconPath: "https://worldweather.wmo.int/images/8.png", weatherValue: "sleet", weatherName: "Sleet" },
            { weatherID: 9, weatherIconPath: "https://worldweather.wmo.int/images/9.png", weatherValue: "shower", weatherName: "Showers, Heavy Showers, Rainshower" },
            { weatherID: 10, weatherIconPath: "https://worldweather.wmo.int/images/10.png", weatherValue: "occasionalshowers", weatherName: "Occasional Showers, Scattered Showers" },
            { weatherID: 11, weatherIconPath: "https://worldweather.wmo.int/images/11.png", weatherValue: "isolatedshowers", weatherName: "Isolated Showers" },
            { weatherID: 12, weatherIconPath: "https://worldweather.wmo.int/images/12.png", weatherValue: "lightshowers", weatherName: "Light Showers" },
            { weatherID: 13, weatherIconPath: "https://worldweather.wmo.int/images/13.png", weatherValue: "freezingrain", weatherName: "Freezing Rain" },
            { weatherID: 14, weatherIconPath: "https://worldweather.wmo.int/images/14.png", weatherValue: "rain", weatherName: "Rain" },
            { weatherID: 15, weatherIconPath: "https://worldweather.wmo.int/images/15.png", weatherValue: "lightrain", weatherName: "Drizzle, Light Rain" },
            { weatherID: 16, weatherIconPath: "https://worldweather.wmo.int/images/16.png", weatherValue: "fog", weatherName: "Fog" },
            { weatherID: 17, weatherIconPath: "https://worldweather.wmo.int/images/17.png", weatherValue: "mist", weatherName: "Mist" },
            { weatherID: 18, weatherIconPath: "https://worldweather.wmo.int/images/18.png", weatherValue: "smoke", weatherName: "Smoke" },
            { weatherID: 19, weatherIconPath: "https://worldweather.wmo.int/images/19.png", weatherValue: "haze", weatherName: "Haze" },
            { weatherID: 20, weatherIconPath: "https://worldweather.wmo.int/images/20.png", weatherValue: "overcast", weatherName: "Overcast" },
            { weatherID: 21, weatherIconPath: "https://worldweather.wmo.int/images/21a.png", weatherValue: "sunnyintervals", weatherName: "Sunny Intervals, No Rain, Clearing" },
            { weatherID: 22, weatherIconPath: "https://worldweather.wmo.int/images/22a.png", weatherValue: "sunnyperiods", weatherName: "Sunny Periods, Partly Cloudy, Partly Bright, Mild" },
            { weatherID: 23, weatherIconPath: "https://worldweather.wmo.int/images/23a.png", weatherValue: "cloudy", weatherName: "Cloudy, Mostly Cloudy" },
            { weatherID: 24, weatherIconPath: "https://worldweather.wmo.int/images/24a.png", weatherValue: "bright", weatherName: "Bright, Sunny, Fair, Fine, Clear" },
            { weatherID: 26, weatherIconPath: "https://worldweather.wmo.int/images/26.png", weatherValue: "windy", weatherName: "Windy, Squall, Stormy, Gale" },
            { weatherID: 27, weatherIconPath: "https://worldweather.wmo.int/images/27.png", weatherValue: "wet", weatherName: "Wet, Humid" },
            { weatherID: 28, weatherIconPath: "https://worldweather.wmo.int/images/28.png", weatherValue: "dry", weatherName: "Dry" },
            { weatherID: 29, weatherIconPath: "https://worldweather.wmo.int/images/29.png", weatherValue: "freezing", weatherName: "Freezing" },
            { weatherID: 30, weatherIconPath: "https://worldweather.wmo.int/images/30.png", weatherValue: "frost", weatherName: "Frost" },
            { weatherID: 31, weatherIconPath: "https://worldweather.wmo.int/images/31.png", weatherValue: "hot", weatherName: "Hot" },
            { weatherID: 32, weatherIconPath: "https://worldweather.wmo.int/images/32.png", weatherValue: "cold", weatherName: "Cold, Chilly" },
            { weatherID: 33, weatherIconPath: "https://worldweather.wmo.int/images/33.png", weatherValue: "warm", weatherName: "Warm" },
            { weatherID: 34, weatherIconPath: "https://worldweather.wmo.int/images/34.png", weatherValue: "cool", weatherName: "Cool" },
            { weatherID: 1, weatherIconPath: "https://worldweather.wmo.int/images/1.png", weatherValue: "sandstorm", weatherName: "Sandstorm, Duststorm, Sand, Dust" },
            { weatherID: 35, weatherIconPath: "https://worldweather.wmo.int/images/35.png", weatherValue: "volcanicash", weatherName: "Volcanic Ash" }
        ]
    }
})