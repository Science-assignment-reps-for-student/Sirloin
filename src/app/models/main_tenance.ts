import {Entity, Column} from "typeorm"

@Entity()
export class Maintenance {
    @Column()
    finish_at!: Date;

    @Column()
    is_tenance!: boolean;
}