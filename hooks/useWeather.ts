import useSWR from 'swr';
import useGeolocation from './useGeolocation';
import { WeatherData } from '@/types';

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}


const useWeather = (): {
  data: WeatherData | undefined;
  error: any;
  isLoading: boolean;
  isValidating:boolean
} => {
  // Fetch coordinates using the previous useGeolocation hook
  const [coordinates, error] = useGeolocation();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // Fetch weather data using SWR
  const { data, error: weatherError,isLoading,isValidating } = useSWR<WeatherData>(
    coordinates ? `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&days=14&q=${coordinates.latitude},${coordinates.longitude}` : null,fetcher
  );

  return {
    data,
    error: error || weatherError,
    isLoading,
    isValidating
  };
};

export default useWeather;
