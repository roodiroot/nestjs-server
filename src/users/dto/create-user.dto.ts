import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
     @ApiProperty({example: 'example@mail.ru', description: 'Почтовый адрес'})
     readonly email: string;
     @ApiProperty({example: '12345', description: 'Пароль пользователя'})
     readonly password: string;
}