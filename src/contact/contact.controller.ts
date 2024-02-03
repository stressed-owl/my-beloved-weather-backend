import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private service: ContactService) {}

  @Post()
  async createContact(@Body() contact: Contact) {
    const _contact = await this.service.create(contact);

    if (!_contact) {
      return 'error in submitting a contact form';
    }

    return 'contact form was submitted successfully';
  }
}
