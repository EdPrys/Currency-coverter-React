import { fetchCurrencyRates } from "./services";

type Props = {
  input: string;
  selects: string[];
};

type RateType = {
  cc: string;
};

export const currency = async ({ input, selects }: Props): Promise<string> => {
  const data = await fetchCurrencyRates();
  const euroRate = data.find((item: RateType) => item.cc === "EUR")?.rate;
  const usdRate = data.find((item: RateType) => item.cc === "USD")?.rate;
  const [first, second] = selects;

  if (input === "") {
    return "";
  }

  if (first === second) {
    return input;
  }

  if (first === "USD" && second === "UAH") {
    const res = parseFloat(input) * usdRate; // USD -> UAH
    return res.toFixed(2).toString();
  }

  if (first === "USD" && second === "EUR") {
    const res = (parseFloat(input) * usdRate) / euroRate; // USD -> EUR
    return res.toFixed(2).toString();
  }
  if (first === "EUR" && second === "UAH") {
    const res = parseFloat(input) * euroRate; // EUR -> UAH
    return res.toFixed(2).toString();
  }
  if (first === "EUR" && second === "USD") {
    const res = (parseFloat(input) * euroRate) / usdRate; // EUR -> USD
    return res.toFixed(2).toString();
  }

  if (first === "UAH" && second === "USD") {
    const res = parseFloat(input) / usdRate; // UAH -> USD
    return res.toFixed(2).toString();
  }

  if (first === "UAH" && second === "EUR") {
    const res = parseFloat(input) / euroRate; // UAH -> EUR
    return res.toFixed(2).toString();
  }

  return "";

  // throw new Error("Failed to retrieve exchange rates"); // FIXME: I'm not sure, we should trow an error. Maybe we can use console.log istead. WDYT?
};
