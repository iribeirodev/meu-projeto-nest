const isProduction = process.env.NODE_ENV === 'production'
require(isProduction ? 'module-alias/register' : 'tsconfig-paths/register')

import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter())
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
