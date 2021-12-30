import "reflect-metadata";
import { createConnection, getCustomRepository } from "typeorm";
import UserRepository                            from "./UserRepository";
import SearchUserByAgeCondition                  from "./SearchUserByAgeCondition";
import SearchUserByNameCondition                 from "./SearchUserByNameCondition";
import MembershipRepository                      from "./MembershipRepository";
import MembershipSearchCondition                 from "./MembershipSearchCondition";
import { MembershipPlan }                        from "./entity/Membership";

createConnection().then(async connection => {
  const userRepository = getCustomRepository(UserRepository)
  const membershipRepository = getCustomRepository(MembershipRepository)

  // const adults = await userRepository.search(new SearchUserByAgeCondition(30))
  // const usersNamedLinh = await userRepository.search(new SearchUserByNameCondition('Linh'))
  const goldMemberships = await membershipRepository.search(new MembershipSearchCondition(MembershipPlan.PLATINUM))

  console.log(goldMemberships);

  // TODO playground here

}).catch(error => console.log(error));
