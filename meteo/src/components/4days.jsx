import { useState } from "react";
import { useState } from "react";
import { useEffect } from "react";

const FourDays = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Tortora");
};
useEffect(() => {
  const fetchfourdaysapi = async () => {
    const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q={search}&appid=d48095779c681880616ca533ac13778e`;
  };
});
export default FourDays;
