import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
        );
        const data = response.data;

        const usdData = data.find((item: { cc: string }) => item.cc === "USD");
        const eurData = data.find((item: { cc: string }) => item.cc === "EUR");

        setUsdRate(usdData.rate);
        setEurRate(eurData.rate);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header>
      <div className={styles.currencyMarquee}>
        <p>
          Курс USD: {usdRate}
          {"  "}
        </p>
        <p>
          Курс EUR: {eurRate}
          {"  "}
        </p>
      </div>
    </header>
  );
};

export default Header;
