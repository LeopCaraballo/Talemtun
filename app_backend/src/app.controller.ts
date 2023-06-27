import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from 'src/weather/weather.service';

@Controller()
export class AppController {
  constructor(private readonly weatherService: WeatherService) { }

  @Get('weather')
  getWeather(@Query('city') city: string, @Query('key') key: string) {
    const weatherData = this.weatherService.getWeatherData(city, key);
    if (!weatherData) {
      return {};
    }
    return weatherData;
  }
}
