import { Controller, Post } from '@nestjs/common';

@Controller()
export class TripController {
  constructor() {}

  @Post()
  postTrip(): string {
    return 'Roteiro criado com sucesso';
  }
}
