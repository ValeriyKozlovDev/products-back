import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

async function start() {

    const PORT = process.env.PORT || 3000
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    app.use(cors());
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()