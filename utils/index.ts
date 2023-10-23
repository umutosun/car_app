export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "873a0f7dcamsh369aa0f059f054dp1c82f5jsn97d7cec6ee1c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
