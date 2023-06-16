const API =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";

type Props = {
  input: string;
  selects: any;
};
export const currency = async ({ input, selects }: Props): Promise<string> => {
  const [first, second] = selects;
  // convertation
  if (input === "") {
    return "";
  } else if (first === second) {
    return input;
  } else {
    try {
      const response = await fetch(API);
      const data = await response.json();

      const euroRate = data.find((item: any) => item.cc === "EUR")?.rate;
      const usdRate = data.find((item: any) => item.cc === "USD")?.rate;

      if (first === "USD" && second === "UAH") {
        const res = parseFloat(input) * usdRate; //TODO:USD -> UAH
        return res.toFixed(2).toString();
      } else if (first === "USD" && second === "EUR") {
        const res = (parseFloat(input) * usdRate) / euroRate; //TODO:USD -> EUR
        return res.toFixed(2).toString();
      } else if (first === "EUR" && second === "UAH") {
        const res = parseFloat(input) * euroRate; //TODO:EUR -> UAH
        return res.toFixed(2).toString();
      } else if (first === "EUR" && second === "USD") {
        const res = (parseFloat(input) * euroRate) / usdRate; //TODO:EUR -> USD
        return res.toFixed(2).toString();
      } else if (first === "UAH" && second === "USD") {
        const res = parseFloat(input) / usdRate; //TODO:UAH -> USD
        return res.toFixed(2).toString();
      } else if (first === "UAH" && second === "EUR") {
        const res = parseFloat(input) / euroRate; //TODO:UAH -> EUR
        return res.toFixed(2).toString();
      } else {
        throw new Error("Failed to retrieve exchange rates");
      }
    } catch (error) {
      console.error("Currency conversion error:", error);
      throw error;
    }
  }
  // input === ""?"":
  const convertedValue = parseFloat(input);
  // console.log(selects[0] + " " + selects[1]);
  return parseFloat(convertedValue.toFixed(2)).toString();
};
