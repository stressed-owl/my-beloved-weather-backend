import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

// Route
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() subscription: Contact): Promise<Contact> {
    return this.contactService.create(subscription);
  }
}
