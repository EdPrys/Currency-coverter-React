import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Header.module.scss";
import { fetchCurrencyRates } from "../../utils/services";

const Header: React.FC = () => {
  const [usdRate, setUsdRate] = useState("");
  const [eurRate, setEurRate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCurrencyRates();

      // Pick USD rate from currency rate API
      const usdData = data.find((item: { cc: string }) => item.cc === "USD");
      const eurData = data.find((item: { cc: string }) => item.cc === "EUR");

      setUsdRate(usdData.rate);
      setEurRate(eurData.rate);
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
