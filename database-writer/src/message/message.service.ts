import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';
import { MessageEntity } from './message.entity';

@Injectable()
export class MessageService {
  constructor(private readonly repository: MessageRepository) {}

  async create(message: unknown) {
    const createEntity = new MessageEntity();
    createEntity.message = message;
    await this.repository.save(createEntity);

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100),
    );
  }
}
