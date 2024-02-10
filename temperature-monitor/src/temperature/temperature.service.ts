import { Injectable } from '@nestjs/common';
import { convertFahrenheitToCelsius } from './utils/convert-fahrenheit-to-celsius';
import { TemperatureMessageDTO } from './dto/temperature-message.dto';

@Injectable()
export class TemperatureService {
  consumeTemperatureMessage(message: TemperatureMessageDTO) {
    const temperatureInCelsius =
      message.unit === 'C'
        ? message.temperature
        : convertFahrenheitToCelsius(message.temperature);

    if (temperatureInCelsius > 50) {
      console.log(`Temperature is too high! (${temperatureInCelsius}°C)`);
    }
  }
}
