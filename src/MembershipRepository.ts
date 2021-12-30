import SearchableRepository from "./SearchableRepository";
import Membership           from "./entity/Membership";
import { EntityRepository } from "typeorm";

@EntityRepository(Membership)
export default class MembershipRepository extends SearchableRepository<Membership> {
  protected alias(): string {
    return "membership"
  }
}
