import { Injectable } from '@nestjs/common';
import weatherData from 'src/data/weather.json';

@Injectable()
export class WeatherService {
    getWeatherData(city: string, key: string) {
        const cityData = weatherData.find(({ name, cod }) => name === city && cod.toString() === key);
        return cityData || null;
    }
}
