import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;

  constructor() {
    this.stripe = new Stripe('STRIPE_KEY');
  }

  async createPaymentIntent(amount: number): Promise<Stripe.PaymentIntent> {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Replace with your desired currency
    });

    return paymentIntent;
  }
}
