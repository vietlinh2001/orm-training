import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User }                                                        from "./User";

export enum MembershipPlan {
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM',
    DIAMOND = 'DIAMOND'
}

@Entity()
export default class Membership {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    plan: MembershipPlan

    @Column()
    purchaseDate: Date

    @ManyToOne(() => User, (user) => user.memberships)
    owner: User
}
