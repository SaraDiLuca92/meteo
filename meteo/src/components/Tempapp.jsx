import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MeteoApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Tortora");
  const [icon, setIcon] = useState("ciao");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=73751102c2a585e25bac6624b80ec20b`;

      const response = await fetch(url);

      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
      console.log(setCity);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="principal">
        <div className="inputData">
          <input
            value={search}
            type="search"
            className="inputField"
            placeholder="put the name of your city"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h2 className="tempmin-max">
                Min: {city.temp_min}°C | Max:{city.temp_max}°C{" "}
              </h2>
              <h2 className="pressure">pressure:{city.pressure}</h2>
              <h2 className="humidity">humidity:{city.humidity}</h2>
            </div>{" "}
          </div>
        )}
      </div>{" "}
    </>
  );
};

export default MeteoApp;
