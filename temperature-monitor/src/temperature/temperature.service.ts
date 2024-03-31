import { Injectable } from '@nestjs/common';
import { convertFahrenheitToCelsius } from './utils/convert-fahrenheit-to-celsius';
import { TemperatureMessageDTO } from './dto/temperature-message.dto';
import { fibonacci } from './utils/fibonacci';

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

    const now = new Date().getTime();
    const result = fibonacci(35); // Adjust the term as needed
    console.log(`Fibonacci duration ${new Date().getTime() - now}.`);
    console.log(result);
  }
}
