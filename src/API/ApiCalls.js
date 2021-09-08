import axios from "axios"


// var options = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely',
//   params: {lat: '35.5', lon: '-78.5'},
//   headers: {
//     'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
//     'x-rapidapi-key': '453c5638d3msh6f1e76947dc9343p1ade49jsnd71d400d884f'
//   }
// };

export const weatherApi = () => {
    return axios.get('https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=ff608f93700f36f126a32723b578bc90', {
    }) 
}