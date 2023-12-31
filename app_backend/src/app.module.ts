import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WeatherService } from 'src/weather/weather.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [WeatherService],
})
export class AppModule {}
