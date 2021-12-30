import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User }                                                          from "./User";

@Entity()
export default class Post {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @ManyToOne(
    () => User,
    (user) => user.posts,
    { eager: true }
  )
  author: User
}