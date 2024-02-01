import { Subscription } from './subscription.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
  ) {}

  async create(subscription: Subscription): Promise<Subscription> {
    return this.subscriptionRepository.save(subscription);
  }
}
