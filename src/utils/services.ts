const API =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";

export const fetchCurrencyRates = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Currency conversion error:", error);
    throw error;
  }
};
