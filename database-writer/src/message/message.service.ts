import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';
import { MessageEntity } from './message.entity';

@Injectable()
export class MessageService {
  constructor(private readonly repository: MessageRepository) {}

  create(message: unknown) {
    const createEntity = new MessageEntity();
    createEntity.message = message;
    return this.repository.save(createEntity);
  }
}
