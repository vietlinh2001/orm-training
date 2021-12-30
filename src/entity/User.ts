import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Name                                                  from "./Name";
import Post                                                  from "./Post";
import Membership                                            from "./Membership";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Name)
  name: Name

  @Column()
  dateOfBirth: Date;

  @Column()
  description: string;

  @OneToMany(
    () => Post,
    (post) => post.author
  )
  posts: Post[]

  @OneToMany(
    () => Membership,
    (membership) => membership.owner
  )
  memberships: Membership[]

  get age(): number {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear()
  }

}
