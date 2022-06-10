import './App.css';
import React, { useEffect, useState } from "react";
import WeatherCard from './CardExampleCard';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Barchart } from './Brachart';
export default function App() {

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
      await fetch(`${process.env.REACT_APP_API_URL}lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [lat])

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <>
          <WeatherCard weatherData={data} />
          <Barchart ></Barchart>
        </>
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}