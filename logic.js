//바텀 클릭+서버에서 정보받기
// 클릭했을때
searchButton.addEventListener('click', function() {
  //검색한 도시의 이름 cityValue
  let cityValue = document.querySelector('#searchCity').value;
  //검색한 도시의 날씨 mainWeater
  let mainWeather = document.querySelector('.icon')
  mainWeather.innerHTML = '' // 기존 날씨 지우기

  //검색한 도시의 온도
  let temper = document.querySelector('.temper');
  let temp = document.createElement('h2');
  temper.innerHTML = ''

  // citiValue 의 정보를 서버에서 받아옴
  window.fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityValue +'&units=metric&appid=205cbffb8e6da0ef5bbfe7309edb3c48')
  .then(function(resp) {
    return resp.json();
  })
  .then(function(json) {
    
    //미들 (1) 온도
    temp.innerHTML = json.main['temp'] + '도';
    temper.appendChild(temp);

    //미들 (2) 아이콘
    // 아이콘 정보를 받고
    let iconValue = json.weather[0]['icon'];
    //아이콘을 만든다
    let img = document.createElement('img');
    img.src = 'http://openweathermap.org/img/wn/' + iconValue + '@2x.png'
    mainWeather.appendChild(img);
  });

  //탑
  // 도시 이름을 출력
  let targetCity = document.querySelector('.cityView'); //타겟
  targetCity.innerHTML = cityValue;
});

