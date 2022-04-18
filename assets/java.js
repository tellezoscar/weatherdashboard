
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var humidity = document.querySelector('.humidity');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&cnt=5&appid=d45109c206c42b8d3f9ddc846a8f73ff')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidityValue = data['humidity'];
  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  humidity.innerHtml = "Humidity - "+humidityValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})