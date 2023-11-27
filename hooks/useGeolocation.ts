import { useState, useEffect } from 'react';

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

interface GeolocationError {
  code: number;
  message: string;
}

type ReturnValue = [Coordinates, GeolocationError | null];

const useGeolocation = (): [Coordinates, GeolocationError | null] => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<GeolocationError | null>(null);

  useEffect(() => {
    const successHandler = (position: GeolocationPosition) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setError(null);
    };

    const errorHandler = (error: GeolocationPositionError) => {
      setError({
        code: error.code,
        message: error.message,
      });

      // Handle errors and display alerts
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("Please allow permission for geolocation");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out, please try again");
          break;
        default:
          alert("An unknown error occurred. Please try again.");
          break;
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      setError({
        code: 0, // Custom code for geolocation not supported
        message: "Geolocation is not available in this browser.",
      });
      alert("Geolocation is not available in this browser.");
    }
  }, []);

  return [coordinates, error];
};

export default useGeolocation;
