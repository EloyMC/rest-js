import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ApiModelProperty } from '@nestjs/swagger';


@Entity()
export class ToDo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    @ApiModelProperty()
    title: string;

    @Column('text')
    @ApiModelProperty()
    details: string;

    @Column()
    @ApiModelProperty()
    isDone: boolean;

}