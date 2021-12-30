import { UserSearchCondition } from "./UserRepository";
import { SelectQueryBuilder }  from "typeorm";
import { User }                from "./entity/User";

export default class SearchByAgeCondition implements UserSearchCondition {

  constructor(private readonly age: number) {
  }

  applyQuery(queryBuilder: SelectQueryBuilder<User>): SelectQueryBuilder<User> {
    const now = new Date()
    const yearsAgo = new Date(`${ now.getFullYear() - this.age }/${ now.getMonth() }/${ now.getDay() }`)

    return queryBuilder.where('user.dateOfBirth <= :yearsAgo', { yearsAgo })
  }
}