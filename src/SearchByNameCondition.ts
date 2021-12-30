import { UserSearchCondition } from "./UserRepository";
import { SelectQueryBuilder }  from "typeorm";
import { User }                from "./entity/User";

export default class SearchByNameCondition implements UserSearchCondition {

  constructor(private readonly keyword: string) {
  }

  applyQuery(queryBuilder: SelectQueryBuilder<User>): SelectQueryBuilder<User> {
    return queryBuilder.where('user.nameFirst like :keyword or user.nameLast like :keyword', {
      keyword: `%${ this.keyword }%`
    })
  }

}