# Meu Projeto NestJS + Fastify (Template Base)

Este é um **template base** para projetos NestJS com Fastify, caminhos absolutos (`@/...`) e suporte a desenvolvimento, build e debug no VSCode.

---

## 🚀 Pré-requisitos

- Node.js >= 18  
- npm >= 9  
- NestJS CLI instalado globalmente (opcional):

```bash
npm install -g @nestjs/cli
```

---

## ⚡ Scripts principais

| Script           | Descrição |
|-----------------|-----------|
| `npm run dev`    | Roda o projeto em **modo desenvolvimento** com hot reload usando `ts-node-dev`. |
| `npm run build`  | Compila o projeto para `dist/`. |
| `npm start`      | Roda o projeto compilado (`dist/main.js`) em **produção**. |
| `npm run start:dev` | Roda usando Nest CLI com hot reload. |
| `npm run start:debug` | Debug no modo dev com Nest CLI. |
| `npm run start:prod` | Roda a versão buildada em produção. |
| `npm run format` | Formata todos os arquivos de acordo com `.prettierrc`. |

---

## 🛠️ Estrutura de pastas

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts         # Ponto de entrada
dist/                # Criado após build
test/                # Testes E2E
```

- **Imports absolutos:** Use `@/` para importar arquivos dentro de `src/`, por exemplo:

```ts
import { AppService } from '@/app.service';
```

---

## 🖥️ Debug no VSCode

Use a configuração `.vscode/launch.json` para debugar:

- Breakpoints funcionam diretamente nos arquivos TypeScript.
- Suporta caminhos absolutos.

---

## 🎨 Prettier & ESLint

- Prettier já configurado para **sem ponto-e-vírgula**, aspas simples e trailing commas.  
- Rode:

```bash
npm run format
```

para aplicar em todos os arquivos.

---

## 📌 Observações

- Para produção, **sempre rode `npm run build` antes de `npm start`**.  
- Para desenvolvimento, `npm run dev` ou `npm run start:dev` já funciona sem build.  
- Estrutura pronta para servir de **template base para novos projetos NestJS + Fastify**.

---

## 🔹 Exemplo rápido de rota

```ts
// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
```

Depois rode `npm run dev` e acesse: `http://localhost:3000/hello`

---

## 🔹 Exemplo rápido de teste E2E

```ts
// test/app.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/hello (GET)', () => {
    return request(app.getHttpServer())
      .get('/hello')
      .expect(200)
      .expect('Hello World!');
  });

  afterAll(async () => {
    await app.close();
  });
});
```

---

Agora você tem **README completo e funcional**, pronto para colocar no GitHub como template base.