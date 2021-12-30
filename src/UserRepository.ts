import { EntityRepository } from "typeorm";
import { User }             from "./entity/User";
import SearchableRepository from "./SearchableRepository";
import { SearchCondition }  from "./SearchCondition";

@EntityRepository(User)
export default class UserRepository extends SearchableRepository<User> {

  async search(condition: SearchCondition<User>) {
    return await condition
      .applyQuery(this.createQueryBuilder('user'))
      .getMany()
  }

  protected alias(): string {
    return "user";
  }
}
