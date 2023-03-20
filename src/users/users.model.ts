import { ApiProperty } from "@nestjs/swagger";
import { Table, Model, Column, DataType } from "sequelize-typescript";

interface UserCreationAttr {
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttr>{

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: "12345", description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: true, description: 'ЗАбанен пользователь или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'За хулиганство', description: 'Причина бана'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}