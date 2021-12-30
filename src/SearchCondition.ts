import { SelectQueryBuilder } from "typeorm";

export interface SearchCondition<Entity> {
  applyQuery(queryBuilder: SelectQueryBuilder<Entity>): SelectQueryBuilder<Entity>
}
