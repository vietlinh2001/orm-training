import { Repository }      from "typeorm";
import { SearchCondition } from "./SearchCondition";

export default abstract class SearchableRepository<Entity> extends Repository<Entity> {

  protected abstract alias(): string

  async search(condition: SearchCondition<Entity>): Promise<Entity[]> {
    return await condition
      .applyQuery(this.createQueryBuilder(this.alias()))
      .getMany()
  }
}