const API =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";

export const currency = (input: string, selects: string[]): number => {
  const [first, second] = selects;
  // convertation

  const convertedValue = parseFloat(input);
  // console.log(selects[0] + " " + selects[1]);
  return parseFloat(convertedValue.toFixed(2));
};
