import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    "X-RapidAPI-Key": "873a0f7dcamsh369aa0f059f054dp1c82f5jsn97d7cec6ee1c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel=${fuel}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

// export const calculateCarRent = (city_mpg: number, year: number) => {
//   const basePriceDay = 50;
//   const mileageFactor = 0.1;
//   const ageFactor = 0.05;

//   const mileageRate = city_mpg * mileageFactor;
//   const ageRate = (new Date().getFullYear() - year) * ageFactor;

//   const rentalRatePerDay = basePriceDay + mileageRate + ageRate;

//   return rentalRatePerDay.toFixed(0);
// };
export const calculateCarRent = (city_mpg: number, year: number) => {
  const city_kpl = city_mpg / 2.35214583; // Dönüşüm faktörü ile çarpma

  const basePriceDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_kpl * mileageFactor; // Dönüştürülmüş değer
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePriceDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
