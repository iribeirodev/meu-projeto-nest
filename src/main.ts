const isProduction = process.env.NODE_ENV === 'production'
require(isProduction ? 'module-alias/register' : 'tsconfig-paths/register')

import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter())
  const port = process.env.PORT ?? 3000
  await app.listen(port)

  const url = await app.getUrl()
  console.log(`🚀 Servidor rodando em: ${url}`)
}
bootstrap()
