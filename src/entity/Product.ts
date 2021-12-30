import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    
    @Column()
    old: number
}
