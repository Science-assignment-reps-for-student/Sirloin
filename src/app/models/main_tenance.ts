import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity({name: "main_tenance"})
export class Maintenance{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    finish_at!: Date;

    @Column()
    is_tenance!: boolean;
}