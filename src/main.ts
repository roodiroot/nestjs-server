import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
 
 const start = async () => {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
    .setTitle('Урок по BACKAND')
    .setDescription('Документация к REST API')
    .setVersion('1.0.0')
    .addTag('ROODIROOT ')
    .build()

    const document = SwaggerModule.createDocument(app, config )
    SwaggerModule.setup('api/docs', app, document)

    await app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`)
    })
 }

 start()