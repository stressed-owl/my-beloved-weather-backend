import { Contact } from './contact.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async create(contact: Contact): Promise<any> {
    this.contactRepository.save(contact);
    return 'contact form was sent successfully';
  }
}
