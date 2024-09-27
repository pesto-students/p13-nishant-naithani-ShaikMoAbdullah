async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    const data = await response.json();
    const currencyCodeData = data.rates[currencyCode];
    return currencyCodeData ? Number(currencyCodeData.toFixed(4)) : null;
  } catch (error) {
    console.log(error);
  }
}

getExchangeRate("INR")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.log(error);
  });
