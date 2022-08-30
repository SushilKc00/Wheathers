let searchBtn = document.getElementById("searchbtn");
let inputText = document.getElementById("inputtext");
let cityName = document.getElementById("cityname");
let h3 = document.getElementById("days");
let p = document.getElementById("month");
let span = document.getElementById("time");
let div = document.getElementById("temp");
let icon = document.getElementById("icon");



let times = new Date();
let days= ['Monday','tuesday','Wednesday','Thursday','friday','saturday','sunday'] ;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let day = times.getDay();
let month = times.getMonth();
let time = times.getDate();

h3.innerHTML= days[day-1];
p.innerHTML = months[month];
span.innerText = time;


let getTemp = async(city)=>{
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e7356bf9406fa69a73ef8333ae0f6fc0`;
       let response = await fetch(url);
       let data = await response.json();
       const weatherType = data.weather[0].main;
       console.log(weatherType)
       if(weatherType=='Rain'){
              console.log("aachuke hai")
                icon.classList.add("fa-cloud-sun-rain");
             }
       let temperature = data.main.temp;
       let nameofcity = data.name;
       div.innerHTML =` <h1>${temperature}</h1>
                          <sup>0</sup>
                        <h2>C</h2>`;
       cityName.innerHTML =`<h2>${nameofcity}</h2>`                 
    

}
getTemp("hisar");
searchBtn.addEventListener('click',()=>{
       const city = inputText.value;
       getTemp(city);
})