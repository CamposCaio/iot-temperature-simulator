import { Controller, Post, Body } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { TemperatureMessageDTO } from './dto/temperature-message.dto';

@Controller('messages')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Post()
  create(@Body() body: TemperatureMessageDTO) {
    return this.temperatureService.consumeTemperatureMessage(body);
  }
}
