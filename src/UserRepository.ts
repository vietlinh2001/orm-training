import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { User }                                             from "./entity/User";

export interface UserSearchCondition {
  applyQuery(queryBuilder: SelectQueryBuilder<User>): SelectQueryBuilder<User>
}

@EntityRepository(User)
export default class UserRepository extends Repository<User> {

  async search(condition: UserSearchCondition) {
    return await condition
      .applyQuery(this.createQueryBuilder('user'))
      .getMany()
  }

}
