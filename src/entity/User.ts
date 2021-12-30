import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Name                                                  from "./Name";
import Post                                       from "./Post";

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

  get age(): number {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear()
  }

}
