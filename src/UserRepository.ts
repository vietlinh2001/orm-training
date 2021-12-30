import { EntityRepository, Repository } from "typeorm";
import { User }                         from "./entity/User";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {

  async findOlderThan(age: number): Promise<User[]> {

    const now = new Date()
    const yearsAgo = new Date(`${now.getFullYear() - age}/${now.getMonth()}/${now.getDay()}`)

    return await this
      .createQueryBuilder('user')
      .where('user.dateOfBirth <= :yearsAgo', { yearsAgo })
      .getMany()

  }

  async findByName(keyword: string): Promise<User[]> {
    return await this.createQueryBuilder('user')
      .where('user.nameFirst like :keyword or user.nameLast like :keyword', {
        keyword: `%${keyword}%`
      })
      .getMany()
  }

}
