# InstaWeather

InstaWeather is a Next.js based weather application designed to deliver precise and user-friendly weather updates. It's tailored for users who seek a quick glance at the current weather conditions along with detailed forecasts.

## Features

1. **Current Temperature & Summary**: Displays the current temperature along with a short summary of the current weather conditions.

2. **Today's Highs & Lows**: Shows the maximum and minimum temperatures for the day.

3. **Today's Forecast Summary**: Provides a text summary of the weather forecast for the day.

4. **Date Display**: Shows today's date for easy reference.

5. **Celsius/Fahrenheit Toggle**: Users can switch between Celsius and Fahrenheit temperature units with a convenient toggle button.

6. **Hourly Forecast**: Displays the weather forecast for the upcoming 24 hours, updated hourly.

7. **14-Day Forecast**: Offers a 14-day weather forecast, including today, with the day and expected high temperatures (e.g., TUE, 85°F).

8. **City Name Display**: Shows the name of the city (e.g., New Cairo) based on the user's location.

9. **Geolocation Support**: Utilizes the browser's Geolocation API to accurately locate the user for localized weather updates. Users will be prompted by the browser to allow location access for the app to function correctly.

## Getting Started

To get started with InstaWeather:

1. **Fork or Clone the Repository**:

   ```
   git clone https://github.com/youssefwt/insta-weather.git
   ```

2. **Install Dependencies**:

   Inside the cloned directory, run:

   ```
   npm install
   ```

3. **Add env.local file in root folder**:

   NEXT_PUBLIC_API_KEY=API-KEY


4. **Run the Application**:

   Start the development server:

   ```
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

5. **Location Access**:

   On the first run, your browser will ask for location permissions. Please allow this to enable accurate weather updates.

6. **Enjoy the Weather Updates**!

## Contributing

Contributions to InstaWeather are always welcome, whether it be improvements to the documentation or new functionalities. Please feel free to fork the repository and submit pull requests.

## License

InstaWeather is released under the [MIT License](LICENSE.md).

## Contact

For any queries or suggestions, please open an issue on the GitHub repository or contact the maintainers directly.

---

InstaWeather: Your go-to weather app for up-to-date and precise weather information!
