import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    const message: string = 'Hello World'
    return message
  }
}
