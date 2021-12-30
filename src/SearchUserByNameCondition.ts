import { SelectQueryBuilder } from "typeorm";
import { User }               from "./entity/User";
import { SearchCondition }    from "./SearchCondition";

export default class SearchUserByNameCondition implements SearchCondition<User> {

  constructor(private readonly keyword: string) {
  }

  applyQuery(queryBuilder: SelectQueryBuilder<User>): SelectQueryBuilder<User> {
    return queryBuilder.where('user.nameFirst like :keyword or user.nameLast like :keyword', {
      keyword: `%${ this.keyword }%`
    })
  }
}