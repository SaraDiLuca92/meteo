import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Tortora");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=465c3a875ad60399391770b0905e7855`;

      const response = await fetch(url);

      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson);
    };

    fetchApi();
  }, [setSearch]);

  return (
    <>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg"></InputGroup.Text>
        <Form.Control
          placeholder="put the name of your city"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />{" "}
      </InputGroup>
      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div className="info">
          <h2 className="location">{search}</h2>
          <h1 className="temp">{city.temp}°C</h1>
          <h2 className="tempmin-max">
            Min: {city.temp_min}°C | Max:{city.temp_max}°C{" "}
          </h2>
        </div>
      )}
    </>
  );
};

export default Tempapp;
