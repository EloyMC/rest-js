import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100})
    @ApiModelProperty()
    username: string;

    @Column('text')
    @ApiModelProperty()
    password: string;
}