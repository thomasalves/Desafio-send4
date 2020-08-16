import React, {useState, useEffect} from 'react';
import Toggle from '../src/component/toggle';
import moment from 'moment';
import axios from 'axios';
import * as S from './styled';

function App() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const now= moment().format('LTS')
    //console.log( now)

    const [ location, setLocation ] = useState(false);

    useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        const  latitude = position.coords.latitude;
        const  longitude = position.coords.longitude
        //console.log( latitude , longitude)
        setLocation(true)
        axios.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${position.coords.longitude}%date=today`)
        .then(response => {
        const local = response.data
        const sunrise = moment(local.results.sunrise, "hh:mm:ss A")
        const sunset =  moment(local.results.sunset, "hh:mm:ss A")
        const newNow = moment(now, "hh:mm:ss A")
        //const teste = moment("9:00:00 PM", "hh:mm:ss: A")
        // console.log('time: ', teste)
        // console.log('sunset: ', sunset)
        // console.log('sunrise: ', sunrise)
        // console.log(moment().format('LTS'))
        // console.log((moment(newNow).isBetween(sunrise, sunset)))
        if(moment(newNow).isBetween(sunrise, sunset)) {
          document.body.style.background = '#bae1f0'
          for (let i = 0; i < items.length; i++) {
            let element = items[i];
            element.style.background = '#fff';

          }
        }else{
          document.body.style.background = '#191970'
          for (let i = 0; i < items.length; i++) {
            let element = items[i];
            element.style.background = 'yellow';



        }
      }

    })
    .catch(err => {
      console.log(err)
    })
    })
}, [])


    var items:any = document.getElementsByClassName('janela');
    for (let i = 0; i < items.length; i++) {
        if(!isToggled){
        let element = items[i];
        element.style.background = '#fff';

        }else{
          let element = items[i];
          element.style.background = 'yellow';

        }
    }


    return (
      <>
      <S.main>
        <S.building className="building">

            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
            <Toggle/>
        </S.building>


      </S.main>
      <S.footer>

      <S.button onClick={toggleTrueFalse}> On/Off</S.button>
      </S.footer>
      </>



    );
}

export default App;
