import { Injectable, Logger } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';
import axios from 'axios';

@Injectable()
export class MessageService {
  private logger = new Logger(MessageService.name);

  async postDatabaseWriter(message: CreateMessageDTO['message']) {
    this.logger.verbose(
      `Sending message to Database Writer: ${JSON.stringify(message)}`,
    );

    await axios.post(`${process.env.DATABASE_WRITER_BASE_URL}/messages`, {
      message,
    });
  }

  async postTemperatureMonitor(message: CreateMessageDTO['message']) {
    this.logger.verbose(
      `Sending message to Temperature Monitor: ${JSON.stringify(message)}`,
    );

    await axios.post(
      `${process.env.TEMPERATURE_MONITOR_BASE_URL}/messages`,
      message,
    );
  }

  async create(message: CreateMessageDTO) {
    this.logger.verbose(
      `Sending message to topic ${message.topic}: ${JSON.stringify(
        message.message,
      )}`,
    );

    await Promise.all([
      this.postDatabaseWriter(message.message),
      this.postTemperatureMonitor(message.message),
    ]);
  }
}
