import { EntityRepository } from "typeorm";
import { User }             from "./entity/User";
import SearchableRepository from "./SearchableRepository";
import { SearchCondition }  from "./SearchCondition";

@EntityRepository(User)
export default class UserRepository extends SearchableRepository<User> {

  protected alias(): string {
    return "user";
  }
}
