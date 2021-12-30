import { SearchCondition }            from "./SearchCondition";
import Membership, { MembershipPlan } from "./entity/Membership";
import { SelectQueryBuilder }         from "typeorm";

export default class MembershipSearchCondition implements SearchCondition<Membership> {
  constructor(private readonly plan: MembershipPlan) {
  }

  applyQuery(queryBuilder: SelectQueryBuilder<Membership>): SelectQueryBuilder<Membership> {
    return queryBuilder.where({
      plan: this.plan
    });
  }
}